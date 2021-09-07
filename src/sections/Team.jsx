import React from 'react';


class Team extends React.Component {
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
  renderLander() {
    return (
      <section id="team" className="aboutself">
      <div className="container">
          <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="sectiontitle">
                              <h2>Meet Our <span>Coaches</span></h2>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user1.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user2.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user3.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user2.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user3.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                          <div className="circleimage">
                              <img src="img/user1.png" className="img-fluid" />
                          </div>
                      </div>
                      <div className="col-xl-12 col0-lg-12 col-md-12 col-12 text-center">
                          <p className="mt-3">
                              “For the person trying to do everything alone, the game really is over. If you want to
                              do something big, you must link up with others. One is too small a number to achieve
                              greatness.That’s the Law of Significance.”</p>
                          <a href="#" className="btn text-uppercase mybutton d-inline-block mt-4">Learn More</a>
                      </div>
                  </div>
              </div>

              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                  <div id="flyer" className="owl-carousel owl-theme mt-3">
                      <div className="item">
                          <div className="aboutthumbnail">
                              <div className="aboutpicture">
                                  <img src="img/Flyer.jpg" className="img-fluid" />
                              </div>

                          </div>
                      </div>
                      <div className="item">
                          <div className="aboutthumbnail">
                              <div className="aboutpicture">
                                  <img src="img/Flyer.jpg" className="img-fluid" />
                              </div>
                          </div>
                      </div>
                      <div className="item">
                          <div className="aboutthumbnail">
                              <div className="aboutpicture">
                                  <img src="img/Flyer.jpg" className="img-fluid" />
                              </div>
                          </div>
                      </div>
                      <div className="item">
                          <div className="aboutthumbnail">
                              <div className="aboutpicture">
                                  <img src="img/Flyer.jpg" className="img-fluid" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    );
  }
  render() {
    return (
      <div className="TeamDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Team;
