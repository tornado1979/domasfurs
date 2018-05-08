import React from 'react'
import propTypes from 'prop-types'

import './button.scss'

const Button = (props) => {
  return (
    <button
      className="btn--image"
      style={{
        backgroundColor: props.color,
        border: `1px solid ${props.border}`,
        color: props.fontColor}}>{props.text}</button>
  )
}

Button.propTypes = {
  border: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}

Button.defaultProps = {
  border: '#ffffff',
  color: 'transparent',
  fontColor: '#fff',
  text: 'click me',
}

export default Button
