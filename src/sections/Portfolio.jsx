import React from "react";

class Portfolio extends React.Component {
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
      <section id = "portfolio" className="work">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectiontitle">
                <div className="sectiontitle">
                  <h2>
                    Our <span>Amazing</span>Work
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/001.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      COACHING
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/002.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      PARTNERSHIP
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/003.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      TRAINING
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/004.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      Public Speaking
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/004.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      Public Speaking
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/003.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      PARTNERSHIP
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/002.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      TRAINING
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="thumnails">
                <div className="workimg">
                  <img src="img/001.jpg" className="img-fluid" />
                </div>
                <div className="absoluteposition">
                  <div className="centeralign">
                    <div className="workstationtitle text-uppercase">
                      COACHING
                    </div>
                    <a href="#" className="btn mybutton text-uppercase">
                      Learn more
                    </a>
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
    return <div className="PortfolioDiv">{this.renderLander()}</div>;
  }
}

export default Portfolio;
