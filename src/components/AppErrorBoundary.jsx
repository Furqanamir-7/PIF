import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('App error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-pif-dark px-6 text-center text-pif-cream">
          <img src="/logo.png" alt="Play It Forward" className="mb-6 h-24 w-24 rounded-full border-2 border-pif-cream/30" />
          <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
          <p className="mt-3 max-w-md text-sm text-pif-cream/70">
            Please refresh the page. If the issue continues, try clearing your browser cache.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary mt-8"
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
