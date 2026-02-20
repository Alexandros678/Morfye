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
  bevelSegments: 4
}

function LogoMesh({ scaleRef }) {
  const groupRef = useRef()
  const { pointer } = useThree()
  const shapes = useMemo(() => createMShapes(), [])

  useFrame(() => {
    if (!groupRef.current) return

    // Smoothly lerp toward the target scale from GSAP
    if (scaleRef?.current !== undefined) {
      const s = THREE.MathUtils.lerp(groupRef.current.scale.x, scaleRef.current, 0.08)
      groupRef.current.scale.setScalar(s)
    }

    // Mouse-follow rotation
    const targetX = pointer.y * 0.25
    const targetY = pointer.x * 0.35
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} scale={0.15}>
        {shapes.map((shape, i) => (
          <mesh key={i}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial
              color="#f59e0b"
              emissive="#f59e0b"
              emissiveIntensity={0.25}
              metalness={0.5}
              roughness={0.3}
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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#f59e0b" />
      <pointLight position={[-4, -2, 4]} intensity={0.4} color="#ffffff" />
      <pointLight position={[0, 3, 2]} intensity={0.3} color="#ff922b" />
      <LogoMesh scaleRef={scaleRef} />
    </Canvas>
  )
}
