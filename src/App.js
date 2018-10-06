import React, {Component} from 'react'

import Footer from './components/Footer'
import Frame from './components/Frame'
import PictureCollection from './components/PictureCollection'
import Feature from './components/Feature'
import Header from './components/Header'
import Product from './components/Product'
import Service from './components/Service'

export default class extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Feature/>
        <Product/>
        <Service/>
        <Frame src="https://www.youtube.com/embed/HzSKsChXxHI"/>
        <PictureCollection/>
        <Frame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8039265375273!2d106.68411491480127!3d10.826311992287664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fa43e44925%3A0x6665aab0a034afee!2zMzcgTmd1eeG7hW4gRHUsIFBoxrDhu51uZyA3LCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1538382132884"/>
        <Footer/>
      </div>
    )
  }
}

