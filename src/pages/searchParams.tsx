import { useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useBreedList } from '../hooks/useBreedList'
import Results from '../components/results'
import Form from '../components/form'
import { fetchSearch } from '../utils/queries'
import { adoptedPetContext } from '../context'
import { Animal, IAdoptedPetContext } from '../utils/interfaces'

export default function SearchParams(): JSX.Element {
  const [reqParams, setReqParams] = useState({
    location: '',
    animal: '',
    breed: ''
  })
  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal as Animal)
  const { adoptedPet } = useContext(adoptedPetContext) as IAdoptedPetContext
  const results = useQuery(['search', reqParams], fetchSearch)
  const pets = results.data?.pets ?? []

  return (
    <div className="search-params">
      <Form
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        setReqParams={setReqParams}
        adoptedPet={adoptedPet}
      />
      <Results pets={pets} />
    </div>
  )
}
