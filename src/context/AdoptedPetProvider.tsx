import { useState } from 'react'
import { IAdoptedPetContext, IPet } from '../utils/interfaces'
import { adoptedPetContext } from '.'

// Provedor de contexto para dados de pets adotados.
export default function AdoptedPetProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  // Estado para o pet adotado.
  const [adoptedPet, setAdoptedPet] = useState<IPet | null>(null)

  // Objeto de contexto contendo o pet adotado e função para definir o pet adotado.
  const context: IAdoptedPetContext = {
    adoptedPet,
    setAdoptedPet
  }

  return (
    // Provedor de contexto para disponibilizar os dados de pet adotado para os componentes descendentes.
    <adoptedPetContext.Provider value={context}>
      {children}
    </adoptedPetContext.Provider>
  )
}
