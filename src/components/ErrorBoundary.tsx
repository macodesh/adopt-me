import { Component, ErrorInfo } from 'react'
import { Link } from 'react-router-dom'

// Componente de limite de erro para capturar e lidar com erros.
export default class ErrorBoundary extends Component<{
  children: JSX.Element
}> {
  state = {
    hasError: false
  }

  // Método estático para atualizar o estado em caso de erro.
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  // Método para capturar e lidar com erros.
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Pode ser usado para registrar o erro em serviços de monitoramento de erros (por exemplo: TrackJS).
    console.error('Error caught!', error, errorInfo)
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      // Renderiza uma mensagem de erro e um link para voltar à página inicial.
      return (
        <>
          <h1>Something went wrong.</h1>
          <Link to="/">Go back to home.</Link>
        </>
      )
    } else {
      // Renderiza os componentes filhos caso não haja erro.
      return this.props.children
    }
  }
}
