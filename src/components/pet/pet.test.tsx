import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom/server'
import Pet from '.'

describe('Pet component', () => {
  it('display a default thumbnail', async () => {
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

    const petThumb = (await pet.findByTestId('thumbnail')) as HTMLImageElement
    expect(petThumb.src).toContain('none.jpg')
    pet.unmount()
  })

  it('display a custom thumbnail', async () => {
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

    const petThumb = (await pet.findByTestId('thumbnail')) as HTMLImageElement
    expect(petThumb.src).toContain('image.jpg')
    pet.unmount()
  })
})
