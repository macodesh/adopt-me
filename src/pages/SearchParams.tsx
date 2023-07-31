import { useState, useContext } from 'react'
import { useBreedList } from '../utils/useBreedList'
import { Results } from '../components/Results'
import { Form } from '../components/Form'
import { useQuery } from '@tanstack/react-query'
import { fetchSearch } from '../utils/queries'
import { adoptedPetContext } from '../context'
import { IAdoptedPetContext } from '../utils/interfaces'

export default function SearchParams(): JSX.Element {
  const [reqParams, setReqParams] = useState({
    location: '',
    animal: '',
    breed: ''
  })
  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const { adoptedPet } = useContext(adoptedPetContext) as IAdoptedPetContext
  const results = useQuery(['search', reqParams], fetchSearch)
  const pets = results.data?.pets ?? []

  return (
    <div className="mx-auto my-0 w-11/12">
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
