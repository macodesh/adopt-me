import { Component, ErrorInfo } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component<{
  children: JSX.Element
}> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught!', error, errorInfo)
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <Link to="/">Go back to home.</Link>
        </>
      )
    } else {
      return this.props.children
    }
  }
}
