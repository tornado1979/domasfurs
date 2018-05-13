import React, { Component } from 'react'
import Container from './container'
import Block from './block'
import MainBlock from './mainBlock'
import Gallery from './galllery'

import { photos } from '../data/galleryData'
import { clients } from '../data/clientsData'

import './main.scss'

import img1 from '../assets/img/bg-750x360.jpg'
import imgLoremIpsum from '../assets/img/Lorem-Ipsum.jpg'
import imgLoremIpsum2 from '../assets/img/Lorem-Ipsum2.jpg'
import imgLoremIpsum3 from '../assets/img/Lorem-Ipsum3.jpg'
import imgLoremIpsum4 from '../assets/img/Lorem-Ipsum4.png'
import imgLoremIpsum5 from '../assets/img/Lorem-Ipsum5.jpg'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      clients,
    }
  }

  render(){
    // 6 blocks under main, top image
    const clients = this.state.clients.map(client => {
      return <Container
        imgWidth='fixed'
        key={client.id}
        link=""
        message={client.name}
        source={client.src}
        type="image"
      />
    })

    return(
      <main>
        {/*main Image block*/}
        <Container
          hasButton={true} // container has button
          hasImg={true} // cotainer has <img>
          hasMessage={true} // container has message
          hasSubTitle={false} // constiner has sub-title
          imgWidth='responsive' // image on container is responsive or fixed
          isSized={false} // true on 'horizontalBlock'
          link="" // button link 
          source={imgLoremIpsum} // image source
          text='Add a message that you want to accompany the image'
          textType='title' // text type is 'title' or 'comment'
          type="image"
        />
        {/*6 clients blocks*/}
        <div className="clientsBlock">
          {clients}
        </div>
        {/*small horizontal block*/}
        <div className="horizontalBlock">
          <Container
            hasBackground={false} // background is image or color
            hasButton={true}
            hasImg={false}
            hasMessage={true}
            hasSubTitle={true}
            imgWidth='responsive'
            isSized={true} // custom size of the block
            link=""
            source={img1}
            subTitle="There is no one who loves pain itself."
            text='Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit...'
            textType='comment'
            type="image" />
        </div>
        {/*3 small blocks on the same line*/}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage={true}
            source={imgLoremIpsum3} // image source
          />
          <Block
            hasImage={true}
            source={imgLoremIpsum3} // image source
          />
          <Block
            hasImage={true}
            source={imgLoremIpsum3} // image source
          />
        </div>
        {/*monoblock whole line, row reverse*/}
        <div className="mono-block">
          <Block
            bgTemplate='template1'
            hasImage={true}
            hasMessage={true}
            hasTitle={true}
            isMonoblock={true}
            isReverse={true} // '1.image & 2.text' or '1.text & 2.image'
            source={imgLoremIpsum4}
            text='my message'
            title='THE title'
          />
        </div>
        {/*monoblock whole line, row*/}
        <div className="mono-block">
          <Block
            bgTemplate='template3'
            hasImage={true}
            hasMessage={true}
            hasTitle={true}
            isMonoblock={true}
            isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
            source={imgLoremIpsum4}
            text='Lorem Ipsum'
            title='Lorem Ipsum'
          />
        </div>
        {/*monoblock whole line, row reverse*/}
        <div className="mono-block">
          <Block
            bgTemplate='template1'
            hasImage={true}
            hasMessage={true}
            hasTitle={true}
            isMonoblock={true}
            isReverse={true} // '1.image & 2.text' or '1.text & 2.image'
            source={imgLoremIpsum4}
            text='Lorem Ipsum'
            title='Lorem Ipsum'
          />
        </div>
        <MainBlock
          bgTemplate='template2'
          hasImage={false}
          hasMessage={true}
          hasTitle={true}
          isMonoblock={false}
          isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
          source={imgLoremIpsum4}
          text='Neque porro quisquam est qui dolorem ipsum quia
           dolor sit amet, consectetur, adipisci velit...'
          title='Main Title' />
        {/*Images Gallery*/}
        <Gallery
          photos={photos}
        />
      </main>
    )
  }
}

export default Main
