import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const CALLOUTS = {
  dog: [
    { position: [0, 1.2, 0.4], title: 'RESCUE DOG', stat: '120+ Adopted', sub: 'Loyal companions rehomed' },
    { position: [0.5, 0.5, 0.6], title: 'MEDICAL CARE', stat: '24/7 Support', sub: 'Vaccinations & recovery' },
    { position: [-0.4, 0.3, 0.5], title: 'TRAINING', stat: 'Youth Led', sub: 'Mentorship walk program' },
  ],
  cat: [
    { position: [0, 0.9, 0.3], title: 'RESCUE CAT', stat: '85+ Saved', sub: 'Safe shelter & foster care' },
    { position: [0.35, 0.4, 0.4], title: 'NUTRITION', stat: 'Daily Meals', sub: 'Balanced diet program' },
    { position: [-0.3, 0.6, 0.35], title: 'ADOPTION', stat: 'Meet & Greet', sub: 'Find your perfect match' },
  ],
}

function WireframeModel({ url, scale = 1, rotationSpeed = 0.003, callouts, position = [0, -0.5, 0] }) {
  const groupRef = useRef()
  const { scene } = useGLTF(url)
  const [active, setActive] = useState(null)

  const wireframeScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          color: '#F4F0E6',
          wireframe: true,
          transparent: true,
          opacity: 0.85,
        })
      }
    })
    return clone
  }, [scene])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={wireframeScene} />
      {callouts.map((callout, index) => (
        <Html key={callout.title} position={callout.position} center distanceFactor={6}>
          <button
            type="button"
            onClick={() => setActive(active === index ? null : index)}
            className={`rounded-lg border px-3 py-2 text-left transition ${
              active === index
                ? 'border-pif-cream bg-pif-deep text-pif-cream shadow-lg'
                : 'border-pif-cream/40 bg-pif-dark/90 text-pif-cream/80 hover:border-pif-cream'
            }`}
            aria-expanded={active === index}
          >
            <p className="text-[9px] font-bold tracking-widest">{callout.title}</p>
            {active === index && (
              <>
                <p className="mt-1 font-mono text-sm font-semibold">{callout.stat}</p>
                <p className="text-[10px] text-pif-cream/70">{callout.sub}</p>
              </>
            )}
          </button>
        </Html>
      ))}
    </group>
  )
}

function Scene({ animal }) {
  const isDog = animal === 'dog'
  const url = isDog
    ? 'https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/dog/model.gltf'
    : 'https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/cat/model.gltf'

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#F4F0E6" />
      <WireframeModel
        url={url}
        scale={isDog ? 0.9 : 0.7}
        rotationSpeed={isDog ? 0.004 : 0.003}
        callouts={CALLOUTS[animal]}
        position={isDog ? [0, -0.6, 0] : [0, -0.4, 0]}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <planeGeometry args={[8, 8, 16, 16]} />
        <meshBasicMaterial color="#F4F0E6" wireframe transparent opacity={0.08} />
      </mesh>
      <OrbitControls enablePan={false} minDistance={2.5} maxDistance={6} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function WireframeAnimals() {
  const [animal, setAnimal] = useState('dog')

  return (
    <div className="overflow-hidden rounded-2xl border border-pif-cream/40 bg-pif-deep">
      <div className="flex items-center justify-between border-b border-pif-cream/20 px-4 py-3 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-pif-cream/60">Interactive Impact</p>
          <h3 className="font-display text-xl font-bold">Explore Our Rescue Figures</h3>
        </div>
        <div className="flex gap-2">
          {['dog', 'cat'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setAnimal(type)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                animal === type
                  ? 'bg-pif-cream text-pif-dark'
                  : 'border border-pif-cream/30 text-pif-cream hover:border-pif-cream'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[360px] bg-pif-dark md:h-[480px]">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center text-sm text-pif-cream/60">
              Loading 3D model...
            </div>
          }
        >
          <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
            <Scene animal={animal} />
          </Canvas>
        </Suspense>
        <p className="absolute bottom-3 left-4 text-xs text-pif-cream/50">Drag to rotate · Click callouts for details</p>
      </div>
    </div>
  )
}

useGLTF.preload('https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/dog/model.gltf')
useGLTF.preload('https://vazxmixjsiawhamfnfsm.supabase.co/storage/v1/object/public/models/cat/model.gltf')
