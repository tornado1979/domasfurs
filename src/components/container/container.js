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
  textType,
}) => {
  const panelClass = classnames({
    'panel--wrapper': !isSized,
    'panel--wrapper--sized': isSized,
    [`with-${bgTemplate}`]: hasBackground,
    [`without-${bgTemplate}`]: !hasBackground,
  })

  // affects small blocks under then main image block
  const imageWith = imgWidth === 'fixed' ? '150px' : '100%'

  return (
    <div className="panel">
      <div className={panelClass} >
        {hasImg && <img alt="" src={source} style={{ maxWidth: imageWith }} />}
        {hasButton && <Button
          border="#fff"
          color="gold"
          fontColor="#fff"
          text="Ask Demo"
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
  hasBackground: false,
  hasButton: false,
  hasImg: true,
  hasMessage: false,
  hasSubTitle: false,
  imgWidth: 'responsive',
  isSized: false,
  link: null,
  message: 'Default message',
  source: null,
  subTitle: 'Default subtitle',
  textType: 'title',
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
