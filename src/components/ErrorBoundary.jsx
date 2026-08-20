import { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'60vh', textAlign:'center', padding:'40px' }}>
          <h1 style={{ fontSize:'clamp(28px,5vw,42px)', marginBottom:'12px' }}>Something went wrong</h1>
          <p style={{ color:'var(--muted)', marginBottom:'28px', maxWidth:'480px' }}>
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <Link to="/" className="btn-primary" onClick={() => this.setState({ hasError: false })}>
            Back to home
          </Link>
        </div>
      )
    }
    return this.props.children
  }
}
