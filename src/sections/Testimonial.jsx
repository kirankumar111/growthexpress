import React from 'react';
import TestimonialElements from '../components/testimonialElements';

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
              <h2>What Our <br /><strong>Participants</strong> Say</h2>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 wow fadeIn" data-wow-duration="2s">
            <TestimonialElements />
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