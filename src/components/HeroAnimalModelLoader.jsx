import { lazy, Suspense } from 'react'
import ClientOnly from './ClientOnly'

const HeroAnimalModelInner = lazy(() => import('./HeroAnimalModel'))

function HeroFallback() {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center md:min-h-[400px] lg:min-h-[460px]">
      <img
        src="/logo.png"
        alt="Play It Forward logo"
        className="h-40 w-40 animate-pulse object-contain opacity-40 md:h-52 md:w-52"
      />
    </div>
  )
}

export default function HeroAnimalModel(props) {
  return (
    <ClientOnly fallback={<HeroFallback />}>
      <Suspense fallback={<HeroFallback />}>
        <HeroAnimalModelInner {...props} />
      </Suspense>
    </ClientOnly>
  )
}
