import React from "react";

class Contact extends React.Component {
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
  renderLander() {
    return (
      <section id="contact" className="contactus">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
              <div className="d-flex align-item-center">
                <div className="vcenter">
                  <h3 className="title">
                    Contact<span> Information</span>
                  </h3>
                  <p className="bluetext">
                    Fill up the form and our Team will get back to you with in
                    24 Hours.
                  </p>
                  <div className="contactinfo">
                    <ul>
                      <li>
                        <img src="img/call.png" />
                        <a href="tel:+91-8217019267">+91-8217019267</a>
                      </li>
                      <li>
                        <img src="img/mail.png" />
                        <a href="mailto:kiran.kumar@growthexpress.in">
                          kiran.kumar@growthexpress.in
                        </a>
                      </li>
                      <li>
                        <a href="#">Koramangala, Bangalore, India</a>
                      </li>
                    </ul>
                  </div>
                  <div className="socialmedai">
                    <ul>
                      <li className="youtube">
                        <a href="#">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="whatsapp">
                        <a href="#">
                          <i className="fa fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
              <div className="sectiontitle">
                <div className="sectiontitle">
                  <h2>
                    Contact <span>Us</span>
                  </h2>
                </div>
              </div>
              <div className="contactform">
                <h4>Any Question or remarks? Just Write us a message!</h4>
                <form name="enquire" method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="lname">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea className="msg"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <input
                        type="submit"
                        className="btn mybutton text-uppercase"
                        value="Send message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  render() {
    return <div className="ContactDiv">{this.renderLander()}</div>;
  }
}

export default Contact;
