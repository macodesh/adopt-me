import { PropsWithChildren, ReactPortal, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children }: PropsWithChildren): ReactPortal {
  const ref = useRef<HTMLDivElement | null>(null)

  if (!ref.current) {
    ref.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal') as HTMLDivElement
    modalRoot.appendChild(ref.current as HTMLDivElement)

    return () => {
      modalRoot.removeChild(ref.current as HTMLDivElement)
    }
  }, [])

  return createPortal(<div>{children}</div>, ref.current)
}
