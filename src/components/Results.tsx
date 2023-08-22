import { IPet } from '../utils/interfaces'
import Pet from './pet'

export default function Results({ pets }: { pets: IPet[] | [] }): JSX.Element {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  )
}
