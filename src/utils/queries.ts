import { IPetFromApi, IQueryKey, IReqParams } from './interfaces'

export async function fetchPets({
  queryKey
}: IQueryKey<string>): Promise<IPetFromApi> {
  const id = queryKey[1]
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)
  return res.json()
}

export async function fetchBreedList({
  queryKey
}: IQueryKey<string>): Promise<string[]> {
  const animal = queryKey[1]
  if (!animal) return []

  const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)

  return res.json()
}

export async function fetchSearch({
  queryKey
}: IQueryKey<IReqParams>): Promise<IPetFromApi> {
  const { animal, location, breed } = queryKey[1] as IReqParams
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  )

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`)
  return res.json()
}
