import { ANIMALS } from '../utils/constants'
import { IFormProps, IReqParams } from '../utils/interfaces'

// Componente de formulário para pesquisa de animais para adoção.
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

        // Coleta os dados do formulário.
        const formData = new FormData(e.currentTarget)
        const updatedData: IReqParams = {
          animal: formData.get('animal')?.toString() ?? '',
          breed: formData.get('breed')?.toString() ?? '',
          location: formData.get('location')?.toString() ?? ''
        }

        // Atualiza os parâmetros de pesquisa.
        setReqParams(updatedData)
      }}
    >
      {/* Exibe a imagem do pet adotado, se disponível. */}
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
          {/* Renderiza opções de tipos de animais. */}
          {ANIMALS.map((a) => (
            <option
              key={a}
              value={a}
            >
              {a}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        {/* Seleção de raça, desabilitada se não houver raças disponíveis. */}
        <select
          id="breed"
          name="breed"
          disabled={breeds.length === 0}
        >
          <option value=""></option>
          {/* Renderiza opções de raças. */}
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
      <button type="submit">Submit</button>
    </form>
  )
}
