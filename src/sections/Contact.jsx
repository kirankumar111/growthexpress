import React from 'react';


class Contact extends React.Component {
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
    <section id="contact">
      <div className="content-box-lg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div id="contact-left">
                <div className="vertical-heading">
                  <h5>Who We Are</h5>
                  <h2>Get <br />In <strong>Touch</strong></h2>
                </div>
                <p>
                  Alone we can do so little, together we can do so much.
                </p>
                <div id="offices">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="office">
                        <h4>India</h4>
                        <ul className="office-details">
                          <li>
                            <i className="fa fa-mobile"></i><span>+91-8217019267</span>
                          </li>
                          <li>
                            <i className="fa fa-envelope"></i
                            ><span>kiran.kumar@growthexpress.in</span>
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>
                            <span>Koramangala, Bangalore, India</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/kiran.designlife"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/coach_kiran"><i className="fa fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/GrowthExpress"><i className="fa fa-youtube-play"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div id="contact-right">
                <form>
                  <h4>Contact Us</h4>
                  <p>
                    If your beliefs match with ours and you are looking for an opportunity, then reach us out to see if we can collaborate to create an postive impact on poeple's lives.
                  </p>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div id="submit-btn">
                    <a
                      className="btn btn-general btn-yellow"
                      href="#"
                      title="Submit"
                      role="button"
                      >Submit</a
                    >
                  </div>
                </form>
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
      <div className="ContactDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Contact;