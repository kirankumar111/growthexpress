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
      <section id="team">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 wow slideInLeft" data-wow-duration="1s">
                <div id="team-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>Meet Our<br/><strong>Talented</strong>Team</h2>
                  </div>
                  <br/>
                  <p>“For the person trying to do everything alone, the game really is over. If you want to do something big, you must link up with others. One is too small a number to achieve greatness.That’s the Law of Significance.”</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 wow slideInRight" data-wow-duration="1s">
                  <div id="team-members" className="owl-carousel owl-theme">
                    <div className="team-member">
                      <img src="img/team/team-1.jpg" alt="team member" className="img-responsive" />
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Kiran Kumar</h6>
                          <p>Speaker and Coach</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/kirankumar111/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="img/team/team-2.jpg" alt="Bharat Pinneti" className="img-responsive" />
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Bharat Pinneti</h6>
                          <p>Process Lead</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="img/team/team-3.jpg" alt="Supra Dash" className="img-responsive" />
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Supra Dash</h6>
                          <p>Energy source</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="img/team/team-4.jpg" alt="Bhushan Singh" className="img-responsive"/>
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Bhushan Singh</h6>
                          <p>The Dreamer</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="img/team/team-5.jpg" alt="Anny Rathour" className="img-responsive"/>
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Annu Rathour</h6>
                          <p>Confidence Bubble</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-member">
                      <img src="img/team/team-6.jpg" alt="Dilip Gupta" className="img-responsive"/>
                      <div className="team-member-overlay">
                        <div className="team-member-info text-center">
                          <h6>Dilip Gupta</h6>
                          <p>Experience Bucket</p>
                          <ul className="social-list">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>   
                  </div>
                </div>
            <div id="progress-elements">
              <div className="row wow fadeInUp">
                <div className="col-sm-6 col-md-6">
                  <div className="skill">
                    <h4>Public Speaking</h4>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:0}}>
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="skill">
                    <h4>Communication</h4>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:0}}>
                        <span>75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="skill">
                    <h4>Leadership</h4>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:0}}>
                        <span>65%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="skill">
                    <h4>Conflict Managment</h4>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:0}}>
                        <span>90%</span>
                      </div>
                    </div>
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
