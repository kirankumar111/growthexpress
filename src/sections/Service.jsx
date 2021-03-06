import React from 'react';


class Service extends React.Component {
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
    <section id="services">
        <div id="services-01">
            <div className="content-box-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center wow slideInDown">
                            <div className="horizontal-heading">
                                <h5>What we do</h5>
                                <h2>Our <strong>Services</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-7 col-md-7 wow slideInLeft">
                            <img src="img/services/laptop-lamp.png" alt="laptop" className="img-responsive"/>
                        </div>
                        <div className="col-sm-5 col-md-5 wow slideInRight">
                            <div className="service">
                                <div className="row">
                                    <div className="col-sm-2 col-md-2">
                                        <div className="icon text-right">
                                            <i className="fa fa-paint-brush"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-10">
                                        <h5>Service 01</h5>
                                        <h4>Personal Growth Program (PGP) Tracker</h4>
                                        <p>Your daily habits today determines your future tomorrow.</p>
                                        <p>We know that you know it all, but still struggling to bring momentum in life? This tool is for you!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="row">
                                    <div className="col-sm-2 col-md-2">
                                        <div className="icon text-right">
                                            <i className="fa fa-laptop"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-10">
                                        <h5>Service 02</h5>
                                        <h4>Coaching & Mentoring | Life Skills</h4>
                                        <p> A mentor sees talent and ability within you than you see in yourself and helps bring it out of you through personal experience. A coach is someone who supports and works closely, identifying your blindspots and walking the journey with you.</p>
                                        <p>Do you have one?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="row">
                                    <div className="col-sm-2 col-md-2">
                                        <div className="icon text-right">
                                            <i className="fa fa-paper-plane-o"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-10">
                                        <h5>Service 03</h5>
                                        <h4>Health & Wellness At Home </h4>
                                        <p>Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.</p>
                                        <p>We can't control time but we can surely maintain our health</p>
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
      <div className="ServiceDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Service;