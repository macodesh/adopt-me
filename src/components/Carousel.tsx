import { Component, MouseEvent } from 'react'

// Componente de carrossel de imagens.
export default class Carousel extends Component<{ images: string[] }> {
  // Estado para controlar a imagem ativa no carrossel.
  state = {
    active: 0
  }

  // Valor padrão para as imagens, caso não seja fornecido como prop.
  static defaultProps = {
    images: ['http://pets-images.dev-api.com/pets/none.jpg']
  }

  // Manipulador de clique para atualizar a imagem ativa.
  handleIndexClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget.dataset.index) {
      this.setState({ active: +e.currentTarget.dataset.index })
    }
  }

  render(): JSX.Element {
    const { active } = this.state
    const { images } = this.props

    return (
      <div className="carousel">
        {/* Imagem principal do carrossel. */}
        <img
          src={images[active]}
          alt="animal hero"
          data-testid="hero"
        />
        <div className="carousel-smaller">
          {/* Renderização das miniaturas das imagens. */}
          {images.map((image, i: number) => (
            <img
              key={image}
              data-testid={`thumbnail-${i}`}
              data-index={i}
              onClick={this.handleIndexClick}
              src={image}
              alt="animal thumbnail"
              className={i === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    )
  }
}
