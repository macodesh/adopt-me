import { createContext } from 'react'
import { IAdoptedPetContext } from '../utils/interfaces'

// Cria o contexto de adoção de pets, definindo seu valor inicial como null.
export const adoptedPetContext = createContext<IAdoptedPetContext | null>(null)
