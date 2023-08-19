export type AnimalType = 'dog' | 'cat' | 'reptile' | 'bird' | 'rabbit'

export interface IPet {
  id: number
  name: string
  animal: AnimalType
  breed: string
  images: string[]
  description?: string
  city?: string
  state?: string
}

export interface IPetProps extends IPet {
  location: string
}

export interface IReqParams {
  animal: string
  breed: string
  location: string
}

export interface IFormProps {
  animal: string
  breeds: string[]
  adoptedPet: IPet | null
  setAnimal: (animal: string) => void
  setReqParams: (reqParams: IReqParams) => void
}

export interface IAdoptedPetContext {
  adoptedPet: IPet | null
  setAdoptedPet: (adoptedPet: IPet | null) => void
}

export interface IPetApiResponse {
  numberOfResults: number
  startIndex: number
  endIndex: number
  hasNext: boolean
  pets: IPet[]
}
