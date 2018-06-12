import React, { Component } from 'react'
import { Block } from '../../components/block'

import '../main/main.scss'


import contactus1 from '../../assets/img/contactus/contactus1.jpg'
import mainStore from '../../assets/img/contactus/main-store.jpg'
import branch from '../../assets/img/contactus/branch.jpg'


class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
    const contactMessage = [
      (
        <table>
          <tbody>
            <tr>
              <td><h2>Contact us</h2></td>
            </tr>
            <tr>
              <td>
                <div style={{ textAlign: 'left' }}>
                  <ul>
                    <li>www.domasfurs.com</li>
                    <li>domasfurs@gmail.com</li>
                    <li>www.facebook.com/domasfurs</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      (
        <table>
          <tbody>
            <tr>
              <td />
            </tr>
            <tr>
              <td>
                <div style={{ textAlign: 'left' }}>
                  <ul>
                    <li>Main Store: 4th Km Neapoli - Kozani</li>
                    <li>Branch: Paralia Katerinis, Nikis 7</li>
                    <li>Tel 1: 0030 6944592080(Domas)</li>
                    <li>Tel 2: 0030 6947407912(Giovanni)</li>
                    <li>Telephone: 0030 24680 23562</li>
                    <li>Fax: 0030 24680 23558</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ),
    ]

    return (
      <main>
        {/* monoblock whole line, reverse */}
        <div className="mono-block">
          <Block
            bgTemplate="template3"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse // '1.image & 2.text' or '1.text & 2.image'
            source={contactus1}
            text={contactMessage[0]}
            title="THE title"
          />
        </div>
        {/* 3 small blocks on the same line FREE SHIPPING, MONEY BACK, SUPPORT */}
        <div className="horizontalBlock with-subblocks">
          <Block
            hasImage
            hasMessage={false}
            hasTitle
            isImageWidthAuto /* images dont have the same the
            width as their container */
            source={mainStore} // image source
            text="We provide you with fast and free delivery regardless
            of the product size and value."
            title="Main Store"
          />
          <Block
            hasImage
            hasMessage={false}
            hasTitle
            isImageWidthAuto /* images dont have the same the
            width as their container */
            source={branch} // image source
            text="30 Day Money Back Guarantee.
            In order to return the goods please follow our returns policy."
            title="Branch"
          />
          <Block
            hasImage={false}
            hasMessage
            hasTitle
            isImageWidthAuto /* images dont have the same the
            width as their container */
            source={branch} // image source
            text={contactMessage[1]}
            title="Info"
          />
        </div>
      </main>
    )
  }
}

export default ContactUs
