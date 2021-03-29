import React from 'react';


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
                        <button className="btn" data-filter=".web"><span>Business Partnership</span></button>
                        <button className="btn" data-filter=".mobile"><span>Effective Communication</span></button>
                        <button className="btn" data-filter=".desktop"><span>Mentorship & Coaching</span></button>
                    </div>
                </div>
            </div>
        </div>
        <section id="portfolio-wrapper" className="wow fadeInUp" data-wow-duration="1.5s">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div id="isotope-container">
                        <div className="col-xs-12 col-sm-6 col-md-3 logo desktop">
                            <div className="portfolio-item">
                                <a href="img/portfolio/001.jpg" title="Add Description">
                                    <img src="img/portfolio/001.jpg" className="img-responsive" alt="portfolio 01"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Coaching</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 web">
                            <div className="portfolio-item">
                                <a href="img/portfolio/002.jpg" title="Add Description">
                                    <img src="img/portfolio/002.jpg" className="img-responsive" alt="portfolio 02"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Partnership</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 logo mobile">
                            <div className="portfolio-item">
                                <a href="img/portfolio/003.jpg" title="Add Description">
                                    <img src="img/portfolio/003.jpg" className="img-responsive" alt="portfolio 03"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Training</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 logo mobile">
                            <div className="portfolio-item">
                                <a href="img/portfolio/004.jpg" title="Add Description">
                                    <img src="img/portfolio/004.jpg" className="img-responsive" alt="portfolio 04"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Public Speaking</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 desktop web">
                            <div className="portfolio-item">
                                <a href="img/portfolio/005.jpg" title="Add Description">
                                    <img src="img/portfolio/005.jpg" className="img-responsive" alt="portfolio 05"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Coaching</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 web desktop">
                            <div className="portfolio-item">
                                <a href="img/portfolio/006.jpg" title="Add Description">
                                    <img src="img/portfolio/006.jpg" className="img-responsive" alt="portfolio 06"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Training</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 desktop">
                            <div className="portfolio-item">
                                <a href="img/portfolio/007.jpg" title="Add Description">
                                    <img src="img/portfolio/007.jpg" className="img-responsive" alt="portfolio 07"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Mentorship</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 logo">
                            <div className="portfolio-item">
                                <a href="img/portfolio/008.jpg" title="Add Description">
                                    <img src="img/portfolio/008.jpg" className="img-responsive" alt="portfolio 08"/>
                                    <div className="portfolio-item-overlay">
                                        <div className="portfolio-item-details text-center">
                                            <h3>Public Speaking</h3>
                                            <span></span>
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
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