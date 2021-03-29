import React from 'react';


class Testimonial extends React.Component {
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
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="vertical-heading wow slideInLeft">
              <h5>Who We Are</h5>
              <h2>What Our <br /><strong>Partners</strong> Say</h2>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 wow fadeIn" data-wow-duration="2s">
            <div id="testimonial-slider" className="owl-carousel owl-theme">
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Priceless Mentorship</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  The biggest challenge in this world is to trust someone who is really successful and have vested interests on our lives. I am fortuante enough to get time from worldclassName leaders to help me grow ahead in my life. Especially, in managing my home team and resolving conflicts.
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-1.jpg"
                        alt="client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p> Kishan Kumar</p>
                        <p> Tech Lead </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Secret of Communication</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  I was in a illusion that my communication was good convey the message, but this organisaion taught me communication is all about listening rather than speaking more. This small shift in thought process boosted my productivity at my office to 38%.
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-2.jpg"
                        alt="Client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p>Ravi Kumar</p>
                        <p>Team Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Growth Mindset</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  The biggest learning of my life I received is to have a goal of growth. If not, most of us are prone to destination or arrival syndrome.
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-3.jpg"
                        alt="Client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p>Lina</p>
                        <p>Manager</p>
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
      <div className="TestimonialDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Testimonial;