import { adoptedPetContext } from '.'
import { useState } from 'react'
import { IAdoptedPetContext, IPet } from '../utils/interfaces'

export function AdoptedPetProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [adoptedPet, setAdoptedPet] = useState<IPet | null>(null)

  const context: IAdoptedPetContext = {
    adoptedPet,
    setAdoptedPet
  }

  return (
    <adoptedPetContext.Provider value={context}>
      {children}
    </adoptedPetContext.Provider>
  )
}
