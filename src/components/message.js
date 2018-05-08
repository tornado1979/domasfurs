import React from 'react'
import propTypes from 'prop-types'

import './message.scss'

const Message = (props) => {
  return (
    <div className="message--image">{props.text}</div>
  )
}

Message.propTypes = {
  text: propTypes.string.isRequired,
}

Message.defaultProps = {
  text: 'Add a message that you want to accompany the image',
}

export default Message
