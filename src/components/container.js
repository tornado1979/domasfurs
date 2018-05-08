import React from 'react'
import propTypes from 'prop-types'

import Button from './button'
import Message from './message'

const Container = (props) => {
  return (
    <div className="panel">
      <img src={props.source} />
      <div className="image-title">
      </div>
      <Button
        border='#fff'
        color='transparent'
        fontColor='#fff'
        text='Ask Demo'
      />
      <Message
        text='Add a message that you want to accompany the image'
      />
    </div>
  )
}

Container.propTypes = {
  link: propTypes.string,
  message: propTypes.string,
  source: propTypes.string,
  type: propTypes.string.isRequired,
}

export default Container
