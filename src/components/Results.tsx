import { IPet, IPetFromApi } from '../utils/interfaces'
import Pet from './Pet'

export default function Results({ pets }: IPetFromApi): JSX.Element {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map((p: IPet) => (
          <Pet
            key={p.id}
            name={p.name}
            animal={p.animal}
            breed={p.breed}
            images={p.images}
            location={`${p.city}, ${p.state}`}
            id={p.id}
          />
        ))
      )}
    </div>
  )
}
