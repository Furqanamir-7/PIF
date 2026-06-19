import { lazy, Suspense } from 'react'
import ClientOnly from './ClientOnly'
import ErrorBoundary from './ErrorBoundary'

const WireframeAnimalsInner = lazy(() => import('./WireframeAnimals'))

const animalsFallback = (
  <div className="flex h-[360px] items-center justify-center rounded-2xl border border-pif-cream/30 bg-pif-deep md:h-[480px]">
    <p className="text-sm text-pif-cream/60">Loading 3D experience...</p>
  </div>
)

export default function WireframeAnimalsLoader() {
  return (
    <ClientOnly fallback={animalsFallback}>
      <ErrorBoundary fallback={animalsFallback}>
        <Suspense fallback={animalsFallback}>
          <WireframeAnimalsInner />
        </Suspense>
      </ErrorBoundary>
    </ClientOnly>
  )
}
