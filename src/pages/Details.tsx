import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPets } from '../utils/queries'
import { IAdoptedPetContext, IPet } from '../utils/interfaces'
import { Carousel } from '../components/Carousel'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { useState, useContext } from 'react'
import { adoptedPetContext } from '../context'
import { Modal } from '../components/Modal'

function Details(): JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const { setAdoptedPet } = useContext(adoptedPetContext) as IAdoptedPetContext
  const { id } = useParams()
  const results = useQuery(['details', id], fetchPets)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    )
  }

  const pet = results.data?.pets[0] as IPet

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}!</button>
        <p>{pet.description}</p>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet)
                  navigate('/')
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default function DetailsErrorBoundary(): JSX.Element {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}
