import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '.'

describe('Carousel component', () => {
  it('changes hero image when thumbnail is clicked', async () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
    const carousel = render(<Carousel images={images} />)
    const hero = (await carousel.findByTestId('hero')) as HTMLImageElement

    expect(hero.src).toContain(images[0])

    for (let i = 0; i < images.length; i++) {
      const thumb = (await carousel.findByTestId(
        `thumbnail-${i}`
      )) as HTMLDivElement

      await userEvent.click(thumb)
      expect(hero.src).toContain(images[i])
      expect(Array.from(thumb.classList)).toContain('active')
    }
    carousel.unmount()
  })
})
