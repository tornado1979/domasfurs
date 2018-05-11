import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import Message from './message'

import './block.scss'

const Block = ({
  bgTemplate,
  hasMessage,
  hasTitle,
  isCopywrite,
  isMonoblock,
  isReverse,
  source,
  text,
  title}) => {
  const blockClass = classnames({
    'copywrite': isCopywrite,
    'direction-reverse': isReverse,
    'monoblock': isMonoblock,
    [`bg--${bgTemplate}`]: bgTemplate,
  })
  return (
    <div className={`block-wrapper ${blockClass}`} >
      {hasTitle && <div className="col-title">{title}</div>}
      <div className="col-img">
        <img src={source} />
      </div>
      {hasMessage && <div className="col-text">
        {text}
      </div>}
    </div>
  )
}

Block.propTypes = {
  isMonoblock: propTypes.bool,
  isReverse: propTypes.bool,
  source: propTypes.string.isRequired,
}

export default Block
