import React from 'react';


class Stats extends React.Component {
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
    <section id="stats">
      <div className="content-box-md">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="vertical-heading wow slideInLeft">
                <h5>Fun Facts</h5>
                <h2>We Deliver <strong>Excellent</strong> Services</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-duration="1s">
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="stats-item text-center">
                <i className="fa fa-bar-chart"></i>
                <h3 className="counter">40</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="stats-item text-center">
                <i className="fa fa-codepen"></i>
                <h3 className="counter">439</h3>
                <p>People Mentored</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="stats-item text-center">
                <i className="fa fa-trophy"></i>
                <h3 className="counter">25</h3>
                <p>Awards Received</p>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
              <div className="stats-item text-center">
                <i className="fa fa-users"></i>
                <h3 className="counter">341</h3>
                <p>Happy Clients</p>
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
      <div className="StatsDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Stats;