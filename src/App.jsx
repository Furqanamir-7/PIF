import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Adopt = lazy(() => import('./pages/Adopt'))
const Events = lazy(() => import('./pages/Events'))
const Donate = lazy(() => import('./pages/Donate'))
const ReportRescue = lazy(() => import('./pages/ReportRescue'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-pif-cream/20 border-t-pif-cream" />
        <p className="text-sm text-pif-cream/70">Loading Play It Forward...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="adopt" element={<Adopt />} />
          <Route path="events" element={<Events />} />
          <Route path="donate" element={<Donate />} />
          <Route path="report" element={<ReportRescue />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
