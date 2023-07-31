import { Component, MouseEvent } from 'react'

export class Carousel extends Component<{ images: string[] }> {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ['http://pets-images.dev-api.com/pets/none.jpg']
  }

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
        <img
          src={images[active]}
          alt="animal hero"
        />
        <div className="carousel-smaller">
          {images.map((image, i: number) => (
            <img
              key={image}
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
