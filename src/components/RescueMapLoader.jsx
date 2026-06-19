import { lazy, Suspense } from 'react'
import ClientOnly from './ClientOnly'
import ErrorBoundary from './ErrorBoundary'

const RescueMapInner = lazy(() => import('./RescueMap'))

const mapFallback = (
  <div className="flex h-[420px] items-center justify-center rounded-2xl border border-pif-cream/30 bg-pif-deep md:h-[520px]">
    <p className="text-sm text-pif-cream/60">Loading map...</p>
  </div>
)

export default function RescueMapLoader() {
  return (
    <ClientOnly fallback={mapFallback}>
      <ErrorBoundary fallback={mapFallback}>
        <Suspense fallback={mapFallback}>
          <RescueMapInner />
        </Suspense>
      </ErrorBoundary>
    </ClientOnly>
  )
}
