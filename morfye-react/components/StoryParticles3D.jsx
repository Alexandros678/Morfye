import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingShape({ position, geometry, speed, rotationAxis }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime * speed

    // Gentle floating drift
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.3
    meshRef.current.position.x = position[0] + Math.sin(t * 0.7) * 0.15

    // Slow rotation
    meshRef.current.rotation.x += rotationAxis[0] * 0.003
    meshRef.current.rotation.y += rotationAxis[1] * 0.003
    meshRef.current.rotation.z += rotationAxis[2] * 0.003
  })

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial
        color="#f59e0b"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  )
}

function Particles() {
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.IcosahedronGeometry(0.15, 0),
      new THREE.TetrahedronGeometry(0.12, 0),
      new THREE.OctahedronGeometry(0.13, 0),
      new THREE.BoxGeometry(0.12, 0.12, 0.12),
    ]

    return Array.from({ length: 20 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      ],
      geometry: geometries[i % geometries.length],
      speed: 0.3 + Math.random() * 0.5,
      rotationAxis: [
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ]
    }))
  }, [])

  return (
    <>
      {shapes.map((props, i) => (
        <FloatingShape key={i} {...props} />
      ))}
    </>
  )
}

export default function StoryParticles3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="story-3d-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
