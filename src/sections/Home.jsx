import React from 'react';
import axios from 'axios';
const HOST = 'http://localhost:8080';

// import DataManager from "config/api";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      patients: []
    };
  }
  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  patients() {
    const url = HOST + '/admin/patients?apiFlag=true';
    // const response = await axios.get(url);
    // console.log("response", response.data);
    return axios.get(url);
  }
  renderPatientsList(patients) {
    console.log('patients', patients);
    return;
  }

  renderLander() {
    return (
      <section id="home" className="banner">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/home/home1.jpeg" className="img-fluid" alt='banner'/>
                <div className="carousel-caption">
                    <div className="d-flex align-item-center">
                        <div className="centeralign">
                            <h3>IT’S YOUR LIFE TAKE<span>CONTROL NOW</span></h3>
                            <p>“If the plan doesn’t work,
                                <span>change the plan,</span>
                                but never the goal.”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="#about" className="btn mybutton">Learn More</a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/banner.jpg" className="img-fluid" alt='banner'/>
                <div className="carousel-caption">
                    <div className="d-flex align-item-center">
                        <div className="centeralign">
                            <h3>IT’S YOUR LIFE TAKE<span>CONTROL NOW</span></h3>
                            <p>“If the plan doesn’t work,
                                <span>change the plan,</span>
                                but never the goal.”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="#about" className="btn mybutton">Learn More</a>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
          </div>
      </section>
    );
  }

  // renderUser() {
  //   return (
  //     <section id="home">
  //       <video id="home-bg-video" poster="video/kiravi.jpeg" autoplay loop muted>
  //         {/* <source src="video/solo.mp4" type="video/mp4" />
  //         <source src="video/solo.ogv" type="video/ogg" />
  //         <source src="video/solo.webm" type="video/webm" /> */}
  //       </video>
  //       <div id="home-overlay"></div>
  //       <div id="home-content">
  //         <div id="home-content-inner" className="text-center">
  //           <div id="home-heading">
  //             <h1 id="home-heading-1">It's Your Life</h1>
  //             <br />
  //             <h1 id="home-heading-2">
  //               Take control <span>Now</span>
  //             </h1>
  //           </div>
  //           <div id="home-text">
  //             <p>
  //               “If the plan doesn’t work, change the plan, but never the goal.”
  //             </p>
  //           </div>
  //           <div id="home-btn">
  //             <a
  //               className="btn btn-general btn-home"
  //               href="#about"
  //               title="Start Now"
  //               role="button"
  //             >
  //               Start Now
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <a href="#about" id="arrow-down" className="smooth-scroll">
  //         <i className="fa fa-angle-down"></i>
  //       </a>
  //     </section>
  //   );
  // }
  render() {
    return (
      <div className="HomeDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Home;
