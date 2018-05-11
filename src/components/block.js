import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import Message from './message'

import './block.scss'

const Block = ({
  bgTemplate,
  hasTitle,
  isMonoblock,
  isReverse,
  source,
  title}) => {
  const blockClass = classnames({
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
      <div className="col-text">
        message
      </div>
    </div>
  )
}

Block.propTypes = {
  isMonoblock: propTypes.bool,
  isReverse: propTypes.string,
  source: propTypes.string.isRequired,
}

export default Block
