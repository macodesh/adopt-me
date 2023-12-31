import { ANIMALS } from '../utils/constants'
import { IFormProps, IReqParams } from '../utils/interfaces'

export default function Form({
  animal,
  setAnimal,
  breeds,
  setReqParams,
  adoptedPet = null
}: IFormProps): JSX.Element {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const updatedData: IReqParams = {
          animal: formData.get('animal')?.toString() ?? '',
          breed: formData.get('breed')?.toString() ?? '',
          location: formData.get('location')?.toString() ?? ''
        }

        setReqParams(updatedData)
      }}
    >
      {adoptedPet ? (
        <div className="pet image-container">
          <img
            src={adoptedPet.images[0]}
            alt={adoptedPet.name}
          />
        </div>
      ) : null}
      <label htmlFor="location">
        Location
        <input
          type="text"
          id="location"
          placeholder="Seattle, WA"
          name="location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option value=""></option>
          {ANIMALS.map((animal) => (
            <option
              key={animal}
              value={animal}
            >
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select
          id="breed"
          name="breed"
          disabled={breeds.length === 0}
        >
          <option value=""></option>
          {breeds.map((breed) => (
            <option
              key={breed}
              value={breed}
            >
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
