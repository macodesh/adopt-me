import { QueryFunction } from '@tanstack/react-query'
import { IPetApiResponse, IReqParams } from './interfaces'

// Função para buscar detalhes de um pet com base no ID.
export const fetchPets: QueryFunction<
  IPetApiResponse,
  ['details', string]
> = async ({ queryKey }) => {
  const id = queryKey[1]
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)
  return res.json()
}

// Função para buscar lista de raças de animais.
export const fetchBreedList: QueryFunction<
  { breeds: string[] },
  ['breeds', string]
> = async ({ queryKey }) => {
  const animal = queryKey[1]
  if (!animal) return { breeds: [] }

  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)

  return res.json()
}

// Função para buscar animais disponíveis para adoção com base nos parâmetros de pesquisa.
export const fetchSearch: QueryFunction<
  IPetApiResponse,
  ['search', IReqParams]
> = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1]
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  )

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)
  return res.json()
}
