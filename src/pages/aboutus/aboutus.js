import React, { Component } from 'react'
import { Block } from '../../components/block'

import '../main/main.scss'


import promo1 from '../../assets/img/promo1.jpg'
import promo2 from '../../assets/img/promo2.jpg'

import aboutus1 from '../../assets/img/aboutus/aboutus1.jpg'
import aboutus2 from '../../assets/img/aboutus/aboutus2.jpg'
import aboutus3 from '../../assets/img/aboutus/aboutus3.jpg'
import aboutus4 from '../../assets/img/aboutus/aboutus4.jpg'
import aboutus5 from '../../assets/img/aboutus/aboutus5.jpg'
import aboutus6 from '../../assets/img/aboutus/aboutus6.jpg'

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
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
            text={promoMessage[0]}
            title="Lorem Ipsum"
          />
        </div>

        {/* 3 small blocks on the same line */}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus1} // image source
            text="For her"
            title="title.."
          />
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus2} // image source
            text="For all"
            title="title.."
          />
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus3} // image source
            text="For him"
            title="title.."
          />
        </div>
        {/* 3 small blocks on the same line */}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus4} // image source
            text="For her"
            title="title.."
          />
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus5} // image source
            text="For all"
            title="title.."
          />
          <Block
            hasImage
            hasMessage={false}
            hasTitle={false}
            source={aboutus6} // image source
            text="For him"
            title="title.."
          />
        </div>
      </main>
    )
  }
}

export default AboutUs
