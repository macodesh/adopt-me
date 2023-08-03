import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom/server'
import Pet from '../components/Pet'

// Testes para o componente Pet.
describe.skip('Pet component', () => {
  // Teste para exibir uma miniatura padrão.
  it('display a default thumbnail', async () => {
    // Renderiza o componente Pet com dados vazios e uma miniatura padrão.
    const pet = render(
      <StaticRouter location={''}>
        <Pet
          location={''}
          id={0}
          name={''}
          animal={'dog'}
          breed={''}
          images={[]}
        />
      </StaticRouter>
    )

    // Obtém a miniatura do pet.
    const petThumb = (await pet.findByTestId('thumbnail')) as HTMLImageElement

    // Verifica se a miniatura contém o nome do arquivo da miniatura padrão.
    expect(petThumb.src).toContain('none.jpg')

    // Desmonta o componente após o teste.
    pet.unmount()
  })

  // Teste para exibir uma miniatura personalizada.
  it('display a custom thumbnail', async () => {
    // Renderiza o componente Pet com dados vazios e uma miniatura personalizada.
    const pet = render(
      <StaticRouter location={''}>
        <Pet
          location={''}
          id={0}
          name={''}
          animal={'dog'}
          breed={''}
          images={['image.jpg']}
        />
      </StaticRouter>
    )

    // Obtém a miniatura do pet.
    const petThumb = (await pet.findByTestId('thumbnail')) as HTMLImageElement

    // Verifica se a miniatura contém o nome do arquivo da miniatura personalizada.
    expect(petThumb.src).toContain('image.jpg')

    // Desmonta o componente após o teste.
    pet.unmount()
  })
})
