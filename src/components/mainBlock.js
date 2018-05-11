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
  text,
  title}) => {
  const blockClass = classnames({
    'direction-reverse': isReverse,
    'monoblock': isMonoblock,
    [`bg--${bgTemplate}`]: bgTemplate,
  })
  return (
    <div className={`main-block ${blockClass}`} >
      {hasTitle && <div className="col-title">{title}</div>}
      {hasImg && <div className="col-img">
        <img src={source} />
      </div>}
      {hasMessage && <div className="col-text">
        {text}
      </div>}
      {/*A. 6 small blocks on two lines space-around*/}
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
  isReverse: propTypes.bool,
  source: propTypes.string.isRequired,
}

export default MainBlock
