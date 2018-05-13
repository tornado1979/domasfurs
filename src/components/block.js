import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import Message from './message'

import './block.scss'

const Block = ({
  bgTemplate,
  hasImage=false,
  hasMessage,
  hasTitle,
  isCopywrite,
  isMenu=false,
  isMonoblock,
  isReverse,
  source,
  text,
  title}) => {
  const blockClass = classnames({
    'block-wrapper': true,
    'copywrite': isCopywrite,
    'direction-reverse': isReverse,
    'menu': isMenu,
    'monoblock': isMonoblock,
    [`bg--${bgTemplate}`]: bgTemplate,
  })
  const colTextClass = classnames({
    'col-text': true,
  })
  return (
    <div className={blockClass} >
      {hasTitle && <div className="col-title">{title}</div>}
      {hasImage && <div className="col-img">
        <img src={source} />
      </div>}
      {hasMessage && <div className={colTextClass}>
        {text}
      </div>}
    </div>
  )
}

Block.propTypes = {
  bgTemplate: propTypes.string,
  hasImage: propTypes.bool,
  hasMessage: propTypes.bool,
  hasTitle: propTypes.bool,
  isCopywrite: propTypes.bool,
  isMenu: propTypes.bool,
  isMonoblock: propTypes.bool,
  isReverse: propTypes.bool,
  source: propTypes.string,
  text: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
  ]),
  title: propTypes.string,
}

export default Block
