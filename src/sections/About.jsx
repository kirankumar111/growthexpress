import React from 'react';


class About extends React.Component {
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
      <section id="about">
        <div id="about-01">
          <div className="content-box-lg">
            <div className="container">
              <div className="row">
                <div
                  className="col-sm-6 col-md-6 wow slideInLeft"
                  data-wow-duration="1s"
                >
                  <div id="about-left">
                    <div className="vertical-heading">
                      <h5>Who We Are</h5>
                      <h2>
                        A <strong>Story</strong>
                        <br />
                        About Us
                      </h2>
                    </div>
                  </div>
                </div>

                <div
                  className="col-sm-6 col-md-6 wow slideInRight"
                  data-wow-duration="1s"
                >
                  <div id="about-right">
                    <p>
                      We are a group of passionate folks who are a big believer
                      of possibility thinking. Most of us come from typical
                      average backgrounds from different parts of India.
                    </p>
                    <p>
                      Everything we do, we believe in challenging the status
                      quo. Our work revolves around the purpose of creating a
                      positive impact on people's lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 wow fadeInUp" data-wow-duration="2s">
                  <div id="about-bottom">
                    <img
                      src="img/about/about.png"
                      alt="About Us"
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about-02">
          <div className="content-box-md">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4 wow fadeInLeft">
                  <div className="about-item text-center">
                    <i className="fa fa-rocket"></i>
                    <h3>Mission</h3>
                    <hr />
                    <p>
                      Today the only mission of ours is to empower every dreamer
                      who has a dream and willingness to put in work but doesn't
                      have an opportunity.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-4 col-md-4 wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="about-item text-center">
                    <i className="fa fa-eye"></i>
                    <h3>Vision</h3>
                    <hr />
                    <p>
                      Leaders biggest responsibility is to devleop new leaders.
                      We believe in creating entrepreneurs who can positively
                      add value to people's lives and impact the world for a
                      better cause.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 wow fadeInRight">
                  <div className="about-item text-center">
                    <i className="fa fa-pencil"></i>
                    <h3>Passion</h3>
                    <hr />
                    <p>
                      "Personal Growth is the key to happiness." Our passion is
                      to inculcate habits within people which would fuel them
                      towards their vision overcoming fear and belief issues.
                    </p>
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
      <div className="AboutDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default About;
