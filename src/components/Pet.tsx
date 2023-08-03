import { Link } from 'react-router-dom'
import { IPetProps } from '../utils/interfaces'

// Componente para exibição de informações de um pet.
export default function Pet({
  name,
  animal,
  breed,
  images = [],
  location,
  id
}: IPetProps): JSX.Element {
  // Define uma imagem padrão para o pet caso não haja imagens fornecidas.
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'

  // Utiliza a primeira imagem do array de imagens fornecidas como imagem principal do pet.
  if (images.length) hero = images[0]

  return (
    // Link para a página de detalhes do pet com base no ID.
    <Link
      to={`/details/${id}`}
      className="pet"
    >
      {/* Contêiner da imagem do pet. */}
      <div className="image-container">
        <img
          src={hero}
          alt={name}
          data-testid="thumbnail"
        />
      </div>
      {/* Informações do pet. */}
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  )
}
