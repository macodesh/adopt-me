import { useQuery } from '@tanstack/react-query'
import { fetchBreedList } from './queries'

export const useBreedList = (animal: string): [string[], string] => {
  const results = useQuery(['breeds', animal], fetchBreedList)
  return [results.data?.breeds ?? [], results.status]
}
