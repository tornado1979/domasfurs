import React from 'react'
import propTypes from 'prop-types'

import Button from './button'
import Message from './message'

import './container.scss'

const Container = ({hasButton, hasMessage, source}) => {
  return (
    <div className="panel">
      <div className="panel--wrapper" >
        <img src={source} />
        {hasButton && <Button
          border='#fff'
          color='transparent'
          fontColor='#fff'
          text='Ask Demo'
        />}
        {hasMessage && <Message
          text='Add a message that you want to accompany the image'
        />}
      </div>
    </div>
  )
}

Container.propTypes = {
  hasButton: propTypes.bool,
  hasMessage: propTypes.bool,
  link: propTypes.string,
  message: propTypes.string,
  source: propTypes.string,
  type: propTypes.string.isRequired,
}

export default Container
