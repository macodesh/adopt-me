import { IPetProps } from '../utils/interfaces'
import { Link } from 'react-router-dom'

export function Pet({
  name,
  animal,
  breed,
  images,
  location,
  id
}: IPetProps): JSX.Element {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'

  if (images.length) hero = images[0]

  return (
    <Link
      to={`/details/${id}`}
      className="relative block"
    >
      <div className="image-container">
        <img
          src={hero}
          alt={name}
        />
      </div>
      <div className="bg-gradient-tr absolute bottom-0 left-0 from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  )
}
