import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './message.scss'

export const Message = ({text, textType}) => {

  const messageClass = classnames({
    'message--comments': textType === 'comment', // when the text is TITLE
    'message--image': textType === 'title', // when the text is a comment
  })

  return (
    <div className={messageClass}>{text}</div>
  )
}

Message.propTypes = {
  text: propTypes.string.isRequired,
}

Message.defaultProps = {
  text: 'Add a message that you want to accompany the image',
}

Message.propTypes = {
  text: propTypes.string.isRequired,
  textType: propTypes.string.isRequired,
}
