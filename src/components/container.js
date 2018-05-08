import React from 'react'
import propTypes from 'prop-types'

import Button from './button'
import Message from './message'

import './container.scss'

const Container = (props) => {
  return (
    <div className="panel">
      <div className="panel--wrapper" >
        <img src={props.source} />
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
