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
        this.props.fallback || (
          <div className="rounded-2xl border border-pif-cream/30 bg-pif-deep p-8 text-center">
            <p className="text-sm text-pif-cream/70">This section could not be loaded. Please refresh the page.</p>
          </div>
        )
      )
    }

    return this.props.children
  }
}
