import React from "react";
import axios from "axios";
const HOST = "http://localhost:8080";

// import DataManager from "config/api";

class Home extends React.Component {
 constructor(props) {
  super();
  this.state = {
   isLoading: true,
   patients: [],
  };
 }
 async componentDidMount() {
  if (!this.props.isAuthenticated) {
   return;
  }

  this.setState({ isLoading: false });
 }

 patients() {
  const url = HOST + "/admin/patients?apiFlag=true";
  // const response = await axios.get(url);
  // console.log("response", response.data);
  return axios.get(url);
 }
 renderPatientsList(patients) {
  console.log("patients", patients);
  return;
 }

 renderLander() {
  return (
   <section id="home">
    <video id="home-bg-video" poster="video/home-bg.webp" autoPlay loop muted>
     {/* <source src="video/solo.mp4" type="video/mp4" />
          <source src="video/solo.ogv" type="video/ogg" />
          <source src="video/solo.webm" type="video/webm" /> */}
    </video>
    <div id="home-overlay"></div>
    <div id="home-content">
     <div id="home-content-inner" className="text-center">
      <div id="home-heading">
       <h1 id="home-heading-1">It's Your Life</h1>
       <br />
       <h1 id="home-heading-2">
        Take control <span>Now</span>
       </h1>
      </div>
      <div id="home-text">
       <p>“If the plan doesn’t work, change the plan, but never the goal.”</p>
      </div>
      <div id="home-btn">
       <a
        className="btn btn-general btn-home"
        href="#about"
        title="Start Now"
        role="button"
       >
        Start Now
       </a>
      </div>
     </div>
    </div>
    <a href="#about" id="arrow-down" className="smooth-scroll">
     <i className="fa fa-angle-down"></i>
    </a>
   </section>
  );
 }

 renderUser() {
  return (
   <section id="home">
    <video id="home-bg-video" poster="video/home-bg.webp" autoplay loop muted>
     {/* <source src="video/solo.mp4" type="video/mp4" />
          <source src="video/solo.ogv" type="video/ogg" />
          <source src="video/solo.webm" type="video/webm" /> */}
    </video>
    <div id="home-overlay"></div>
    <div id="home-content">
     <div id="home-content-inner" className="text-center">
      <div id="home-heading">
       <h1 id="home-heading-1">It's Your Life</h1>
       <br />
       <h1 id="home-heading-2">
        Take control <span>Now</span>
       </h1>
      </div>
      <div id="home-text">
       <p>“If the plan doesn’t work, change the plan, but never the goal.”</p>
      </div>
      <div id="home-btn">
       <a
        className="btn btn-general btn-home"
        href="#about"
        title="Start Now"
        role="button"
       >
        Start Now
       </a>
      </div>
     </div>
    </div>
    <a href="#about" id="arrow-down" className="smooth-scroll">
     <i className="fa fa-angle-down"></i>
    </a>
   </section>
  );
 }
 render() {
  return (
   <div className="HomeDiv">
    {this.props.isAuthenticated ? this.renderUser() : this.renderLander()}
   </div>
  );
 }
}

export default Home;
