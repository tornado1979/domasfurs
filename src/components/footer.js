import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './footer.scss'
import MainBlock from './mainBlock'
import Block from './block'

import {
  copywrite,
  footerData,
  socialData,
} from '../data/footerData'

const Footer = ({bgTemplate}) => {
  const footerClass = classnames({
    [`bg--${bgTemplate}`]: true,
  })

  // read footerData and upt them on an array
  const lista = Object.keys(footerData)
    .map(key => {
      return footerData[key].items.map(listItem => {
        if(footerData[key].type !== 'image') {
          return <div key={listItem}>{listItem}</div>
        } else {
          return {
            img: listItem,
            type: 'image',
          }
        }
      })
    })
  // create lists & images blocks
  const innerBlocks = lista.map((items, index) => {
    if (items[0].type && items[0].type === 'image'){
      return <Block
        hasMessage={false}
        hasTitle={false}
        key={index+10}
        text=''
        title=''
        source={items[0].img}
      />
    } else {
      return <Block
        hasMessage={true}
        hasTitle={false}
        key={index+10}
        text={items}
        title=''
      />
    }
  })

  // read social data
  const socialList = Object.keys(socialData)
    .map(key => {
      return socialData[key].items.map(listItem => {
        if(socialData[key].type !== 'image') {
          return <div key={listItem}>{listItem}</div>
        } else {
          return {
            img: listItem,
            type: 'image',
          }
        }
      })
    })
  // create social  blocks
  const socialBlocks = socialList.map((items, index) => {
    if (items[0].type && items[0].type === 'image'){
      return <Block
        hasMessage={false}
        hasTitle={false}
        key={index+10}
        text=''
        title=''
        source={items[0].img}
      />
    } else {
      return <Block
        hasMessage={true}
        hasTitle={false}
        key={index+10}
        text={items}
        title=''
      />
    }
  })

  const copywriteBlock = <Block
    hasMessage={true}
    hasTitle={false}
    key='123'
    text={copywrite}
    title=''
    isCopywrite={true} // gets special className
  />

  console.log(copywriteBlock) // eslint-disable-line
  return (
    <footer className={footerClass}>
      <MainBlock
        bgTemplate='template2'
        hasImg={false}
        hasMessage={true}
        hasTitle={true}
        isMonoblock={false}
        isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
        text='Neque porro quisquam est qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit...'
        title='Main Title'>
        {/*blocks 4 footer blocks 1st line*/}
        {innerBlocks}
        {/*social blocks & copywrite 2nd line*/}
        {socialBlocks}
        {copywriteBlock}
      </MainBlock>
    </footer>
  )
}

export default Footer
