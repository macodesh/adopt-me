export type Animal = 'dog' | 'cat' | 'reptile' | 'bird' | 'rabbit'

export interface IPet {
  id: number
  name: string
  animal: Animal
  breed: string
  images: string[]
  description?: string
  city?: string
  state?: string
}

export interface IPetFromApi {
  pets: IPet[]
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

export interface IQueryKey<T> {
  queryKey: [string, T | undefined]
}

export interface IAdoptedPetContext {
  adoptedPet: IPet | null
  setAdoptedPet: (adoptedPet: IPet | null) => void
}
