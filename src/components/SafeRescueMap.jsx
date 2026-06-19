import { lazy, Suspense } from 'react'
import ClientOnly from './ClientOnly'
import ErrorBoundary from './ErrorBoundary'

const RescueMap = lazy(() => import('./RescueMap'))

const fallback = (
  <div className="flex h-[420px] items-center justify-center rounded-2xl border border-pif-cream/30 bg-pif-deep md:h-[520px]">
    <div className="text-center">
      <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-pif-cream/20 border-t-pif-cream" />
      <p className="text-sm text-pif-cream/60">Loading map...</p>
    </div>
  </div>
)

export default function SafeRescueMap() {
  return (
    <ClientOnly fallback={fallback}>
      <ErrorBoundary fallback={fallback}>
        <Suspense fallback={fallback}>
          <RescueMap />
        </Suspense>
      </ErrorBoundary>
    </ClientOnly>
  )
}
