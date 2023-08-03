import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { fetchPets } from '../utils/queries'
import { IAdoptedPetContext } from '../utils/interfaces'
import Carousel from '../components/Carousel'
import ErrorBoundary from '../components/ErrorBoundary'
import { adoptedPetContext } from '../context'
import Modal from '../components/Modal'

// Componente que exibe os detalhes de um pet.
function Details(): JSX.Element {
  // Estado para controlar a exibição do modal.
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  // Obtém o contexto de adoção de pets.
  const { setAdoptedPet } = useContext(adoptedPetContext) as IAdoptedPetContext

  // Obtém o ID do pet da URL.
  const { id } = useParams()
  if (!id) throw new Error('Missing ID')

  // Utiliza o React Query para buscar os detalhes do pet.
  const results = useQuery(['details', id], fetchPets)

  // Renderiza um indicador de carregamento enquanto os dados estão sendo buscados.
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    )
  }

  // Obtém os dados do pet a partir dos resultados da consulta.
  const pet = results.data?.pets[0]
  if (!pet) throw new Error('Pet not found')

  return (
    <div className="details">
      {/* Exibe um carrossel de imagens do pet. */}
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        {/* Botão para adotar o pet, exibindo um modal de confirmação. */}
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}!</button>
        <p>{pet.description}</p>
      </div>
      {/* Modal de confirmação para adoção. */}
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              {/* Botão "Yes" para confirmar a adoção. */}
              <button
                onClick={() => {
                  setAdoptedPet(pet)
                  navigate('/')
                }}
              >
                Yes
              </button>
              {/* Botão "No" para cancelar a adoção. */}
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

// Componente que envolve 'Details' em um 'ErrorBoundary' para capturar erros.
export default function DetailsErrorBoundary(): JSX.Element {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}
