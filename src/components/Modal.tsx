import { PropsWithChildren, ReactPortal, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

// Componente de modal para renderização fora do fluxo padrão de componentes.
export default function Modal({ children }: PropsWithChildren): ReactPortal {
  // Referência para o elemento do modal no DOM.
  const ref = useRef<HTMLDivElement | null>(null)

  // Cria o elemento do modal caso não exista.
  if (!ref.current) {
    ref.current = document.createElement('div')
  }

  // Efeito para montar e desmontar o modal no DOM.
  useEffect(() => {
    // Obtém o elemento raiz do modal no DOM.
    const modalRoot = document.getElementById('modal') as HTMLDivElement
    if (ref.current) modalRoot.appendChild(ref.current)

    // Função de limpeza para desmontar o modal ao desmontar o componente.
    return () => {
      modalRoot.removeChild(ref.current as HTMLDivElement)
    }
  }, [])

  // Renderiza o conteúdo do modal utilizando o portal do React DOM.
  return createPortal(<div>{children}</div>, ref.current)
}
