import React from 'react'
import Container from './container'

import './main.scss'
import img1 from '../assets/img/hd1080.png'

const Main = () => {
  return(
    <main>
      {/*main Image block*/}
      <Container
        type="image"
        source={img1}
        message=""
        link="" />
    </main>
  )
}

export default Main
