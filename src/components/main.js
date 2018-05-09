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
          type="image"
          source={img1}
          message=""
          link="" />
        {/*clients blocks*/}
        <div className="clientsBlock">
          {clients}
        </div>
      </main>
    )
  }
}

export default Main
