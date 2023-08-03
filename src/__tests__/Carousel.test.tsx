import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '../components/Carousel'

// Testes para o componente Carousel.
describe.skip('Carousel component', () => {
  it('changes hero image when thumbnail is clicked', async () => {
    // Lista de imagens para o carrossel.
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

    // Renderiza o componente Carousel com as imagens fornecidas.
    const carousel = render(<Carousel images={images} />)

    // Obtém a imagem principal do carrossel.
    const hero = (await carousel.findByTestId('hero')) as HTMLImageElement

    // Verifica se a imagem principal é a primeira imagem da lista.
    expect(hero.src).toContain(images[0])

    // Itera sobre as imagens e simula cliques nas miniaturas.
    for (let i = 0; i < images.length; i++) {
      // Obtém a miniatura atual.
      const thumb = (await carousel.findByTestId(
        `thumbnail-${i}`
      )) as HTMLDivElement

      // Simula um clique na miniatura.
      await userEvent.click(thumb)

      // Verifica se a imagem principal mudou para a imagem correspondente à miniatura clicada.
      expect(hero.src).toContain(images[i])

      // Verifica se a classe 'active' foi adicionada à miniatura clicada.
      expect(Array.from(thumb.classList)).toContain('active')
    }

    // Desmonta o componente após os testes.
    carousel.unmount()
  })
})
