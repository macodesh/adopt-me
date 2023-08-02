import { useQuery } from '@tanstack/react-query'
import { fetchBreedList } from './queries'
import { Animal } from './interfaces'

export const useBreedList = (animal: Animal): [string[], string] => {
  const results = useQuery(['breeds', animal], fetchBreedList)
  return [results.data?.breeds ?? [], results.status]
}
