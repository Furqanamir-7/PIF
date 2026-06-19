import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[40vh] items-center justify-center px-4">
          <div className="max-w-md rounded-2xl border border-pif-cream/30 bg-pif-deep p-8 text-center">
            <p className="font-display text-xl font-bold">Something went wrong</p>
            <p className="mt-3 text-sm text-pif-cream/70">
              Please refresh the page. If the issue continues, contact us on WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary mt-6"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
