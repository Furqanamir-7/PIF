import PageTransition from './PageTransition'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingContactDock from './FloatingContactDock'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
      <FloatingContactDock />
    </div>
  )
}
