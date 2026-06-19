import { lazy, Suspense } from 'react'
import ClientOnly from './ClientOnly'
import ErrorBoundary from './ErrorBoundary'

const HeroAnimalModel = lazy(() => import('./HeroAnimalModel'))

const fallback = (
  <div className="flex h-full min-h-[320px] items-center justify-center bg-pif-deep/50 md:min-h-[400px] lg:min-h-[460px]">
    <div className="text-center">
      <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-pif-cream/20 border-t-pif-cream" />
      <p className="text-xs text-pif-cream/50">Loading 3D model...</p>
    </div>
  </div>
)

export default function SafeHeroAnimalModel(props) {
  return (
    <ClientOnly fallback={fallback}>
      <ErrorBoundary fallback={fallback}>
        <Suspense fallback={fallback}>
          <HeroAnimalModel {...props} />
        </Suspense>
      </ErrorBoundary>
    </ClientOnly>
  )
}
