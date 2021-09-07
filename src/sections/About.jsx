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
      <section id = "about" className="aboutus">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="d-flex align-item-center">
                        <div className="vcenter">
                            <h3 className="title"><span>About</span> Us</h3>
                            <div className="paddings">
                                <p>We are a group of passionate folks who are a big
                                    believer of possibility thinking.</p>
                                <p className="mt-3">We started our journey in January 2020 with
                                    a book club & growth events with a coaching
                                    setup to help people apply their learnings in life.</p>
                                <a href="#about" className="btn mybutton text-uppercase mt-5">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="youtube">
                        <div id="youtube" className="owl-carousel owl-theme">
                            <div className="item">
                                <iframe width="100%" height="450"
                                    src="https://www.youtube-nocookie.com/embed/CAo1vgGpSsY"
                                    title="Why we got started" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            </div>
                            <div className="item">
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/6nU00mJhSN4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="item">
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/WbL6VstaoBw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="item">
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/Uf1QvH57Hvs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div id="aboutus" className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="aboutthumbnail">
                                <div className="aboutpicture">
                                    <img src="img/about/1.jpg" alt='bookclub'/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="aboutthumbnail">
                                <div className="aboutpicture">
                                    <img src="img/about/2.jpg" alt='bookclub2'/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="aboutthumbnail">
                                <div className="aboutpicture">
                                    <img src="img/about/3.jpg" alt='growthclub3'/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="aboutthumbnail">
                                <div className="aboutpicture">
                                    <img src="img/about/4.jpg" alt='bookclub4'/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="aboutthumbnail">
                                <div className="aboutpicture">
                                    <img src="img/about/3.jpg" alt='bookclub5'/>
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
      <div className="AboutDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default About;
