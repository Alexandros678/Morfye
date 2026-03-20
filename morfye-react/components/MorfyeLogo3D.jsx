import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Build the Morfye "M" logo as extruded 3D geometry
function createMShapes() {
  const leftArm = new THREE.Shape()
  leftArm.moveTo(-3, 2.5)
  leftArm.lineTo(-0.15, -0.7)
  leftArm.lineTo(0, -0.7)
  leftArm.lineTo(0, 0)
  leftArm.lineTo(-1.7, 2.5)
  leftArm.closePath()

  const rightArm = new THREE.Shape()
  rightArm.moveTo(3, 2.5)
  rightArm.lineTo(0.15, -0.7)
  rightArm.lineTo(0, -0.7)
  rightArm.lineTo(0, 0)
  rightArm.lineTo(1.7, 2.5)
  rightArm.closePath()

  const leftTri = new THREE.Shape()
  leftTri.moveTo(-3, -2)
  leftTri.lineTo(-3, 0.3)
  leftTri.lineTo(-1.2, -2)
  leftTri.closePath()

  const rightTri = new THREE.Shape()
  rightTri.moveTo(3, -2)
  rightTri.lineTo(3, 0.3)
  rightTri.lineTo(1.2, -2)
  rightTri.closePath()

  return [leftArm, rightArm, leftTri, rightTri]
}

const extrudeSettings = {
  depth: 0.8,
  bevelEnabled: true,
  bevelThickness: 0.1,
  bevelSize: 0.06,
  bevelSegments: 2
}

function LogoMesh({ scaleRef, lightMode, orientRef }) {
  const groupRef = useRef()
  const { pointer } = useThree()
  const shapes = useMemo(() => createMShapes(), [])

  useFrame(() => {
    if (!groupRef.current) return

    if (scaleRef?.current !== undefined) {
      const s = THREE.MathUtils.lerp(groupRef.current.scale.x, scaleRef.current, 0.08)
      groupRef.current.scale.setScalar(s)
    }

    // Use gyroscope on mobile if available, otherwise mouse pointer
    const orient = orientRef?.current
    const targetX = orient ? orient.x * 0.4  : pointer.y * 0.25
    const targetY = orient ? orient.y * 0.5  : pointer.x * 0.35
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04
  })

  const color             = lightMode ? '#d85f03' : '#f59e0b'
  const emissive          = lightMode ? '#d85f03' : '#f59e0b'
  const emissiveIntensity = lightMode ? 0.6 : 0.25

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} scale={0.15}>
        {shapes.map((shape, i) => (
          <mesh key={i}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshLambertMaterial
              color={color}
              emissive={emissive}
              emissiveIntensity={emissiveIntensity}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function MorfyeLogo3D({ scaleRef }) {
  const [mounted, setMounted] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [cameraZ, setCameraZ] = useState(6)
  const orientRef = useRef(null) // { x, y } normalized gyroscope values

  useEffect(() => {
    setMounted(true)
    const mobile = window.innerWidth < 768
    setCameraZ(mobile ? 10 : 6)

    const update = () => setLightMode(document.body.classList.contains('light-mode'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // Gyroscope — mobile only
    if (mobile && typeof DeviceOrientationEvent !== 'undefined') {
      const onOrientation = (e) => {
        const beta  = e.beta  ?? 0  // pitch: ~90 when phone upright
        const gamma = e.gamma ?? 0  // roll:  ~0 when phone upright
        orientRef.current = {
          x: Math.max(-1, Math.min(1, (beta  - 90) / 45)),
          y: Math.max(-1, Math.min(1,  gamma       / 45))
        }
      }

      const addListener = () =>
        window.addEventListener('deviceorientation', onOrientation, true)

      // iOS 13+ requires explicit permission from a user gesture
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const onFirstTouch = () => {
          DeviceOrientationEvent.requestPermission()
            .then(res => { if (res === 'granted') addListener() })
            .catch(() => {})
          document.removeEventListener('touchstart', onFirstTouch)
        }
        document.addEventListener('touchstart', onFirstTouch, { once: true })
      } else {
        addListener()
      }

      return () => {
        window.removeEventListener('deviceorientation', onOrientation, true)
        observer.disconnect()
      }
    }

    return () => observer.disconnect()
  }, [])

  if (!mounted) return null

  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov: 45 }}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      dpr={[1, 1]}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={lightMode ? 1.4 : 0.6} />
      <pointLight position={[5, 5, 5]} intensity={lightMode ? 1.5 : 1} color="#ff922b" />
      <pointLight position={[-4, -2, 4]} intensity={lightMode ? 0.8 : 0.4} color="#ffffff" />
      <LogoMesh scaleRef={scaleRef} lightMode={lightMode} orientRef={orientRef} />
    </Canvas>
  )
}
