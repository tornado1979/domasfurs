import React, { Component } from 'react'
import { Container } from '../../components/container/index'
import { Block } from '../../components/block'
// import { MainBlock } from '../../components/mainBlock'
import Gallery from '../../components/gallery/gallery'

import { photos } from '../../data/galleryData'
import { clients as clientsData } from '../../data/clientsData'

import './main.scss'

import docaNew from '../../assets/img/doca-new.jpg'
import cat1 from '../../assets/img/cat1.jpg'
import cat2 from '../../assets/img/cat2.jpg'
import cat3 from '../../assets/img/cat3.jpg'

import img1 from '../../assets/img/bg-750x360.jpg'
import promo1 from '../../assets/img/promo1.jpg'
import promo2 from '../../assets/img/promo2.jpg'

import shipping from '../../assets/img/free-shipping.png'
import moneyBack from '../../assets/img/money-back.png'
import support from '../../assets/img/support.png'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientsData,
    }
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
    // 6 blocks under main, top image
    const clients = this.state.clientsData.map(client => {
      return (<Container
        bgTemplate="bg1"
        imgWidth="fixed"
        key={client.id}
        link=""
        message={client.name}
        source={client.src}
        text="no text"
        type="image"
      />)
    })

    const promoMessage = [
      (
        <table>
          <tbody>
            <tr>
              <td><h2>We are glad you have chosen our...</h2></td>
            </tr>
            <tr>
              <td>
                <p>What can be more convenient than having all the assortment
                of any-type-of-products in one place?
                When you don’t have to...
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      (
        <table>
          <tbody>
            <tr>
              <td><h2>Improve your business and save your time...</h2></td>
            </tr>
            <tr>
              <td>
                <p>Thanks to an English entrepreneur Michael Aldrich who
                   invented
                online shopping in 1979,
                you don’t necessarily have to do it....
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    ]

    return (
      <main>
        {/* main Image block */}
        <Container
          bgTemplate="bg1"
          hasButton={false} // container has button
          hasImg // cotainer has <img>
          hasMessage // container has message
          hasSubTitle={false} // constiner has sub-title
          imgWidth="responsive" // image on container is responsive or fixed
          isSized={false} // true on 'horizontalBlock'
          link="" // button link
          source={docaNew} // image source doca-new.jpg
          text="Doca new products collection"
          textType="title" // text type is 'title' or 'comment'
          type="image"
        />
        {/* 6 clients blocks */}
        <div className="clientsBlock">
          {clients}
        </div>
        {/* small horizontal block */}
        <div className="horizontalBlock">
          <Container
            bgTemplate="bg1"
            hasBackground // background is image or color
            hasButton={false}
            hasImg={false}
            hasMessage
            hasSubTitle={false}
            imgWidth="responsive"
            isSized // custom size of the block
            link=""
            source={img1}
            subTitle="There is no one who loves pain itself."
            text="Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit..."
            textType="comment"
            type="image"
          />
        </div>
        {/* 3 small blocks on the same line */}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage
            hasMessage
            hasTitle={false}
            source={cat1} // image source
            text="For her"
            title="title.."
          />
          <Block
            hasImage
            hasMessage
            hasTitle={false}
            source={cat2} // image source
            text="For all"
            title="title.."
          />
          <Block
            hasImage
            hasMessage
            hasTitle={false}
            source={cat3} // image source
            text="For him"
            title="title.."
          />
        </div>
        {/* monoblock whole line, row reverse */}
        <div className="mono-block">
          <Block
            bgTemplate="template1"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse // '1.image & 2.text' or '1.text & 2.image'
            source={promo1}
            text={promoMessage[0]}
            title="THE title"
          />
        </div>
        {/* monoblock whole line, row */}
        <div className="mono-block">
          <Block
            bgTemplate="template3"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
            source={promo2}
            text={promoMessage[1]}
            title="Lorem Ipsum"
          />
        </div>
        {/* 3 small blocks on the same line FREE SHIPPING, MONEY BACK, SUPPORT */}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage
            hasMessage
            hasTitle
            isImageWidthAuto /* images dont have the same the
             width as their container */
            source={shipping} // image source
            text="We provide you with fast and free delivery regardless
             of the product size and value."
            title="FREE SHIPPING"
          />
          <Block
            hasImage
            hasMessage
            hasTitle
            isImageWidthAuto /* images dont have the same the
            width as their container */
            source={moneyBack} // image source
            text="30 Day Money Back Guarantee.
            In order to return the goods please follow our returns policy."
            title="MONEY BACK"
          />
          <Block
            hasImage
            hasMessage
            hasTitle
            isImageWidthAuto /* images dont have the same the
            width as their container */
            source={support} // image source
            text="Round-the-clock free hotline.
            +3(800) 2345-6789"
            title="24h SUPPORT"
          />
        </div>

        {/* this block shows 6 small images on two lines */}
        {/* <MainBlock
          bgTemplate="template2"
          hasImage={false}
          hasMessage
          hasTitle
          isMonoblock={false}
          isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
          source={img1}
          text="Neque porro quisquam est qui dolorem ipsum quia
           dolor sit amet, consectetur, adipisci velit..."
          title="Main Title"
        /> */}
        {/* Images Gallery */}
        <Gallery
          photos={photos}
        />
      </main>
    )
  }
}

export default Main
