import { createContext } from 'react'
import { IAdoptedPetContext } from '../utils/interfaces'

export const adoptedPetContext = createContext<IAdoptedPetContext | null>(null)
