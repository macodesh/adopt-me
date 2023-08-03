import { IPet } from '../utils/interfaces'
import Pet from './Pet'

// Componente para exibir os resultados da pesquisa de pets.
export default function Results({ pets }: { pets: IPet[] | [] }): JSX.Element {
  return (
    <div className="search">
      {/* Verifica se não há pets encontrados. */}
      {!pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        // Mapeia e renderiza cada pet encontrado utilizando o componente Pet.
        pets.map((p) => (
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
