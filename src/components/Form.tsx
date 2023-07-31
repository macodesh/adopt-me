import { ANIMALS } from '../utils/constants'
import { IFormProps, IReqParams } from '../utils/interfaces'

export function Form({
  animal,
  setAnimal,
  breeds,
  setReqParams,
  adoptedPet = null
}: IFormProps): JSX.Element {
  return (
    <form
      className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
      onSubmit={(e) => {
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)
        const updatedData = {
          animal: formData.get('animal') ?? '',
          breed: formData.get('breed') ?? '',
          location: formData.get('location') ?? ''
        }

        setReqParams(updatedData as IReqParams)
      }}
    >
      {adoptedPet && (
        <div className="pet image-container">
          <img
            src={adoptedPet.images[0]}
            alt={adoptedPet.name}
          />
        </div>
      )}
      <label htmlFor="location">
        Location
        <input
          type="text"
          id="location"
          placeholder="Seattle, WA"
          name="location"
          className="mb-5 block w-60"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          className="mb-5 block w-60"
        >
          <option value=""></option>
          {ANIMALS.map((s) => (
            <option
              key={s}
              value={s}
            >
              {s}
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
          className="mb-5 block w-60 disabled:opacity-50"
        >
          <option value=""></option>
          {breeds.map((b) => (
            <option
              key={b}
              value={b}
            >
              {b}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="color rounded border-none bg-orange-500 px-6 py-2 text-white transition hover:opacity-50"
      >
        Submit
      </button>
    </form>
  )
}
