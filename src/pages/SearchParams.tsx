import { useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useBreedList } from '../utils/useBreedList'
import Results from '../components/Results'
import Form from '../components/Form'
import { fetchSearch } from '../utils/queries'
import { adoptedPetContext } from '../context'
import { Animal, IAdoptedPetContext } from '../utils/interfaces'

// Componente para a página de pesquisa de animais para adoção.
export default function SearchParams(): JSX.Element {
  // Estado para os parâmetros de pesquisa.
  const [reqParams, setReqParams] = useState({
    location: '',
    animal: '',
    breed: ''
  })

  // Estado para o tipo de animal selecionado.
  const [animal, setAnimal] = useState('')

  // Utiliza o hook customizado para obter a lista de raças com base no tipo de animal selecionado.
  const [breeds] = useBreedList(animal as Animal)

  // Obtém o estado de adoção de pets do contexto global.
  const { adoptedPet } = useContext(adoptedPetContext) as IAdoptedPetContext

  // Utiliza o React Query para buscar os animais com base nos parâmetros de pesquisa.
  const results = useQuery(['search', reqParams], fetchSearch)

  // Obtém os pets a partir dos resultados da busca.
  const pets = results.data?.pets ?? []

  return (
    <div className="search-params">
      {/* Componente de formulário para pesquisa. */}
      <Form
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        setReqParams={setReqParams}
        adoptedPet={adoptedPet}
      />
      {/* Componente de resultados para exibir os animais encontrados. */}
      <Results pets={pets} />
    </div>
  )
}
