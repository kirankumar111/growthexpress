import React from 'react';
import PortfolioElements from '../components/portfolioElements';

class Portfolio extends React.Component {
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
    <section id="portfolio">
      <div className="content-box-md">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="vertical-heading wow slideInLeft">
                        <h5>Find Out Work</h5>
                        <h2>Our <br/>Amazing<strong>Work</strong></h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div id="isotope-filters">
                        <button className="btn active" data-filter="*"><span>All</span></button>
                        <button className="btn" data-filter=".logo"><span>Public Speaking</span></button>
                        <button className="btn" data-filter=".web"><span>Partnerships & Collaborations</span></button>
                        <button className="btn" data-filter=".mobile"><span>Effective Communication</span></button>
                        <button className="btn" data-filter=".desktop"><span>Mentorship & Coaching</span></button>
                    </div>
                </div>
            </div>
        </div>
        <section id="portfolio-wrapper" className="wow fadeInUp" data-wow-duration="1.5s">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <PortfolioElements />
                </div>
            </div>
        </section>
      </div>
    </section>
    );
  }
  render() {
    return (
      <div className="PortfolioDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Portfolio;