import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import Button from './button'
import Message from './message'

import './block.scss'
import Block from './block'

import imgLoremIpsum3 from '../assets/img/Lorem-Ipsum3.jpg'
import imgLoremIpsum5 from '../assets/img/Lorem-Ipsum5.jpg'

const MainBlock = ({
  bgTemplate,
  hasImg,
  hasMessage,
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
      {hasImg && <div className="col-img">
        <img src={source} />
      </div>}
      {hasMessage && <div className="col-text">
        message
      </div>}
      {/*A. 3 small blocks on the same line*/}
      <div className="horizontalBlock with-subblocks">
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
      </div>
      {/*B. 3 small blocks on the same line*/}
      <div className="horizontalBlock with-subblocks">
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
        <Block
          hasTitle={true}
          source={imgLoremIpsum3} // image source
          title='Title'
        />
      </div>
    </div>
  )
}

MainBlock.propTypes = {
  isMonoblock: propTypes.bool,
  isReverse: propTypes.string,
  source: propTypes.string.isRequired,
}

export default MainBlock
