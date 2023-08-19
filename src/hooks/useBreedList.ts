import { useQuery } from '@tanstack/react-query'
import { fetchBreedList } from '../utils/queries'
import { AnimalType } from '../utils/interfaces'

export const useBreedList = (animal: AnimalType): [string[], string] => {
  const results = useQuery(['breeds', animal], fetchBreedList)
  return [results.data?.breeds ?? [], results.status]
}
