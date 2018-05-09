import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import Message from './message'

import './container.scss'

const Container = ({
  hasBackground,
  hasButton,
  hasImg,
  hasMessage,
  hasSubTitle,
  imgWidth,
  isSized,
  source,
  text,
  textType}) => {
  const panelClass = classnames({
    'panel--wrapper': !isSized,
    'panel--wrapper--sized': isSized,
    'with-bg': hasBackground,
    'without-bg': hasBackground,
  })

  // affects small blocks under then main image block
  const img_width = imgWidth === 'fixed' ? '150px' : '100%'

  return (
    <div className="panel">
      <div className= {panelClass} >
        {hasImg && <img src={source} style={{maxWidth: img_width}}/>}
        {hasButton && <Button
          border='#fff'
          color='transparent'
          fontColor='#fff'
          text='Ask Demo'
        />}
        {hasMessage && <Message
          text={text}
          textType={textType}
        />}
      </div>
    </div>
  )
}

Container.defaultProps = {
  hasBackground: false,
  hasImg: true,
  text: 'Add a message that you want to accompany the image',
}

Container.propTypes = {
  hasBackground: propTypes.bool,
  hasButton: propTypes.bool,
  hasImg: propTypes.bool,
  hasMessage: propTypes.bool,
  hasSubTitle: propTypes.bool,
  imgWidth: propTypes.oneOf(['responsive', 'fixed']), // responsive: gets small
  isSized: propTypes.bool,
  link: propTypes.string,
  message: propTypes.string,
  source: propTypes.string,
  text: propTypes.string.isRequired,
  textType: propTypes.oneOf(['title', 'comment']), // title: large with shadow
  type: propTypes.string.isRequired,
}

export default Container
