import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const MODELS = {
  dog: 'https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/dog/model.gltf',
  cat: 'https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/cat/model.gltf',
}

function SolidAnimal({ url, scale = 1, position = [0, -0.5, 0] }) {
  const groupRef = useRef()
  const { scene } = useGLTF(url)

  const solidScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: '#F4F0E6',
          roughness: 0.55,
          metalness: 0.08,
          flatShading: false,
        })
      }
    })
    return clone
  }, [scene])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.006
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={solidScene} />
    </group>
  )
}

function FallbackSolid({ isDog }) {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.006
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[isDog ? 0.32 : 0.28, 24, 24]} />
        <meshStandardMaterial color="#F4F0E6" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.05, isDog ? 0.12 : 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[isDog ? 0.2 : 0.16, isDog ? 0.65 : 0.5, 12, 24]} />
        <meshStandardMaterial color="#F4F0E6" roughness={0.5} />
      </mesh>
    </group>
  )
}

function Scene({ animal, compact = false }) {
  const isDog = animal === 'dog'

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#F4F0E6" />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#1E3322" />
      <Suspense fallback={<FallbackSolid isDog={isDog} />}>
        <SolidAnimal
          url={MODELS[animal]}
          scale={compact ? (isDog ? 0.75 : 0.6) : isDog ? 0.9 : 0.72}
          position={isDog ? [0, -0.55, 0] : [0, -0.42, 0]}
        />
      </Suspense>
      {!compact && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]}>
          <circleGeometry args={[2.2, 48]} />
          <meshBasicMaterial color="#F4F0E6" transparent opacity={0.06} />
        </mesh>
      )}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </>
  )
}

export default function HeroAnimalModel({ compact = true, className = '' }) {
  const [animal, setAnimal] = useState('dog')

  return (
    <div className={`relative ${className}`}>
      <div className="absolute right-3 top-3 z-10 flex gap-1.5">
        {['dog', 'cat'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setAnimal(type)}
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition ${
              animal === type
                ? 'bg-pif-cream text-pif-dark'
                : 'border border-pif-cream/30 bg-pif-dark/80 text-pif-cream/80'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <Canvas camera={{ position: [0, 0.8, compact ? 3.2 : 4], fov: 42 }} className="h-full w-full">
        <Scene animal={animal} compact={compact} />
      </Canvas>
    </div>
  )
}
