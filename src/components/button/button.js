import React from 'react'
import propTypes from 'prop-types'

import './button.scss'

export const Button = (props) => {
  return (
    <button
      className="btn--image"
      style={{
        backgroundColor: props.color,
        border: `1px solid ${props.border}`,
        color: props.fontColor,
      }}
    >{props.text}
    </button>
  )
}

Button.propTypes = {
  border: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  fontColor: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}
