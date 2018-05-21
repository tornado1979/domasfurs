import React, { Component } from 'react'
import { Block } from '../../components/block'

import '../main/main.scss'


import contactus1 from '../../assets/img/contactus/contactus1.jpg'
import contactus2 from '../../assets/img/aboutus/aboutus2.jpg'


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
              <td><h2>Central Showroom</h2></td>
            </tr>
            <tr>
              <td>
                <div>
                  <ul>
                    <li>Street 28 October 2 Neapoli, Greece P.O. 50001</li>
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
              <td><h2>Katerini Show room</h2></td>
            </tr>
            <tr>
              <td>
                <div style={{ textAlign: 'left' }}>
                  <ul>
                    <li>Address: Nikis 7, Katerini, Greece.</li>
                    <li>Tel 1: 0030 6944592080(Dimitrios)</li>
                    <li>Tel 2: 0030 6947407912    (John)</li>
                    <li>Telephone-Fax: 0030 2468023558</li>
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
        {/* monoblock whole line, row reverse */}
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
        {/* monoblock whole line, row */}
        <div className="mono-block">
          <Block
            bgTemplate="template3"
            hasImage
            hasMessage
            hasTitle={false}
            isMonoblock
            isReverse={false} // '1.image & 2.text' or '1.text & 2.image'
            source={contactus2}
            text={contactMessage[1]}
            title="Lorem Ipsum"
          />
        </div>
      </main>
    )
  }
}

export default ContactUs
