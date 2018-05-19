import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from '../button'
import { Message } from '../message'

import './container.scss'

export const Container = ({
  bgTemplate,
  hasBackground,
  hasButton,
  hasImg,
  hasMessage,
  hasSubTitle,
  imgWidth,
  isSized,
  source,
  subTitle,
  text,
  textType}) => {
  const panelClass = classnames({
    'panel--wrapper': !isSized,
    'panel--wrapper--sized': isSized,
    [`with-${bgTemplate}`]: hasBackground,
    [`without-${bgTemplate}`]: !hasBackground,
  })

  // affects small blocks under then main image block
  const img_width = imgWidth === 'fixed' ? '150px' : '100%'

  return (
    <div className="panel">
      <div className= {panelClass} >
        {hasImg && <img src={source} style={{maxWidth: img_width}}/>}
        {hasButton && <Button
          border='#fff'
          color='gold'
          fontColor='#fff'
          text='Ask Demo'
        />}
        {hasMessage && <Message
          text={text}
          textType={textType}
        />}
        {hasSubTitle && <Message
          text={subTitle}
          textType={textType}
        />}
      </div>
    </div>
  )
}

Container.defaultProps = {
  bgTemplate: 'bg1', // bg template e.g. -bg1, -bg2 etc
  hasBackground: false,
  hasImg: true,
  hasSubTitle: false,
  text: 'Add a message that you want to accompany the image',
}

Container.propTypes = {
  bgTemplate: propTypes.string.isRequired,
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
  subTitle: propTypes.string,
  text: propTypes.string.isRequired,
  textType: propTypes.oneOf(['title', 'comment']), // title: large with shadow
  type: propTypes.string.isRequired,
}
