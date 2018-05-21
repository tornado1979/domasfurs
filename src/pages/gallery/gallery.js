import React, { Component } from 'react'
import { Block } from '../../components/block'
// import { MainBlock } from './mainBlock'
import Gallery from '../../components/gallery/gallery'

import { photos } from '../../data/galleryData'

import '../main/main.scss'

class Pictures extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  galleryText() { // eslint-disable-line
    return (
      <div className="right-column">
        <h2>Vivamuslibero Auguer</h2>
        <p>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco.
        </p>
        <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h2>Vivamuslibero Auguer</h2>
        <ul>
          <li>Aliquam venenatis leo et orci.</li>
          <li>Pellentesque eleifend vulputate massa.</li>
          <li>Vivamus eleifend sollicitudin eros.</li>
          <li>Maecenas vitae nunc.</li>
          <li>Ut pretium odio eu nisi.</li>
          <li>Nam condimentum mi id magna.</li>
          <li>Pellentesque consectetuer, felis vel rhoncus.</li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <main>
        {/* monoblock whole line, row reverse */}
        <div className="mono-block">
          <Block
            bgTemplate="template1"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
            source={photos[9].src}
            text={this.galleryText()}
            title="THE title"
          />
        </div>
        {/* Images Gallery */}
        <Gallery
          photos={photos}
        />
      </main>
    )
  }
}

export default Pictures
