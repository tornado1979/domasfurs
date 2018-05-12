import React, { Component } from 'react'
import propTypes from 'prop-types'
import LightBox from 'react-images'

import './gallery.scss'

class Gallery extends Component {
  constructor(props){
    super(props)

    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openLightbox(event, obj) {
    console.log(obj) // eslint-disable-line
    this.setState({
      currentImage: obj.id,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  render(){
    const images = this.props.photos.map(image => {
      return <div key={image.id}>
        <img alt={image.alt}
          onClick={(event) => {this.openLightbox(event, image)}}
          src={image.src}
        />
      </div>
    })
    console.log(images) // eslint-disable-line
    return (
      <div className="gallery">
        {images}
        <LightBox images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Gallery
