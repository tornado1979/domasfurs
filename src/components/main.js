import React, { Component } from 'react'
import Container from './container'

import './main.scss'
import img1 from '../assets/img/hd1080.png'
import imgSmall from '../assets/img/300x300.png'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      clients: [
        {
          id: 0,
          name: 'client1',
        },
        {
          id: 1,
          name: 'client1',
        },
        {
          id: 2,
          name: 'client1',
        },
        {
          id: 3,
          name: 'client1',
        },
        {
          id: 4,
          name: 'client1',
        },
        {
          id: 5,
          name: 'client1',
        },
      ],
    }
  }

  render(){
    const clients = this.state.clients.map(client => {
      return <Container
        imgWidth='fixed'
        key={client.id}
        link=""
        message={client.name}
        source={imgSmall}
        type="image"
      />
    })
    console.log(clients, this.state.clients) // eslint-disable-line
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
          source={img1} // image source
          text='Add a message that you want to accompany the image'
          textType='title' // text type is 'title' or 'comment'
          type="image"
        />
        {/*clients blocks*/}
        <div className="clientsBlock">
          {clients}
        </div>
        {/*small horizontal block*/}
        <div className="horizontalBlock">
          <Container
            hasBackground={true} // background is image or color
            hasButton={false}
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
      </main>
    )
  }
}

export default Main
