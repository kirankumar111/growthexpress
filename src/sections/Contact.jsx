import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      patients: [],
      name: "",
      email: "",
      phone: "",
      reference: "",
      message: "",
      isSubmitting: false,
    };
  }
  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // Validate the name and phone fields
    if (!this.state.name || !this.state.phone) {
      if (!this.state.name) {
        this.setState({ nameError: "Name is required" });
      } else {
        this.setState({ nameError: "" });
      }

      if (!this.state.phone) {
        this.setState({ phoneError: "Phone number is required" });
      } else {
        this.setState({ phoneError: "" });
      }

      return;
    }
    // Prevent multiple submissions while waiting for the API response
    if (this.state.isSubmitting) return; 

    this.setState({ isSubmitting: true });

    try {
      // Perform your API call here, using the form data in this.state
      // For example, you can use the Fetch API or Axios to make the API request
      // Replace the following with your API call code
      const response = await fetch('https://pfubkl26oh.execute-api.ap-south-1.amazonaws.com/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Name": this.state.name,
          "Email": this.state.email,
          "PhoneNumber": this.state.phone,
          "Reference": this.state.reference,
          "Reason": this.state.message,
        }),
      });

      if (response.ok) {
        // Handle a successful API response here
        console.log('API call successful');
      } else {
        // Handle API errors here
        console.error('API call failed');
      }
    } catch (error) {
      console.error('API call error', error);
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  renderLander() {
    return (
      <section id="contact">
        <div className="content-box-lg">
          <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="61461974f10cdd001d16aa19" data-style-height="100%" data-style-width="100%">
            <a href="https://www.trustpilot.com/review/growthexpress.in" target="_blank" rel="noopener">Trustpilot</a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div id="contact-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>
                      Get <br />
                      In <strong>Touch</strong>
                    </h2>
                  </div>
                  <p>Alone we can do so little, together we can do so much.</p>
                  <div id="offices">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="office">
                          <h4>India</h4>
                          <ul className="office-details">
                            <li>
                              <i className="fa fa-mobile"></i>
                              <span>+91-8217019267</span>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                              <span>kiran.kumar@growthexpress.in</span>
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
                      <a href="https://www.facebook.com/kiran.designlife">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/coach_kiran">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/GrowthExpress">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div id="contact-right">
                  <form onSubmit={this.handleSubmit}>
                    <h4>Contact Us</h4>
                    <p>
                      If your beliefs match with ours and you are looking for an
                      opportunity, then reach us out to see if we can
                      collaborate to create an postive impact on poeple's lives.
                    </p>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${this.state.nameError ? "is-invalid" : ""}`}
                          id="name"
                          placeholder="Your Name"
                          onChange={this.handleInputChange}
                          value={this.state.name}
                          required
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
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={`form-control ${this.state.phoneError ? "is-invalid" : ""}`}
                          id="phone"
                          placeholder="Phone No."
                          onChange={this.handleInputChange}
                          value={this.state.phone}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                      <select
                        className="form-control"
                        id="reference"
                        onChange={this.handleInputChange}
                        value={ this.state.reference }
                        placeholder="reference"
                      >
                        <option value="">Select a reference</option>
                        <option value="Linkedin">LinkedIn</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Karthik">Karthik</option>
                        <option value="Other">Rohit</option>
                        <option value="Other">Kiran</option>
                        <option value="Other">Others</option>
                      </select>
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
                    <button
                      type="submit"
                      className="btn btn-general btn-yellow"
                      title="Submit"
                      disabled={this.state.isSubmitting}
                    >
                      {this.state.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                      {/* <a
                        rel="noopener noreferrer"
                        className="btn btn-general btn-yellow"
                        href="#"
                        title="Submit"
                        role="button"
                      >
                        Submit
                      </a> */}
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
    return <div className="ContactDiv">{this.renderLander()}</div>;
  }
}

export default Contact;
