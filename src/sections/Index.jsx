import React from 'react';

import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Team from './Team';
import Statement from './Statement';
import Service from './Service';
import Portfolio from './Portfolio';
import Blogs from './Blogs';
import Stats from './Stats';
import Testimonial from  './Testimonial';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';
import Login from './Login';

export default class Index extends React.Component {

  constructor(props) {
    super();
    this.state = {
      showUploadPopup: false,
      uploadCalledForLeadId: null
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <About />
        <Team />
        <Statement />
        <Service />
        <Portfolio />
        <Testimonial />
        <Stats />
        <Blogs />
        <Contact />
        <Map />
        <Footer />
        <Login />
      </div>
    );
  }

}