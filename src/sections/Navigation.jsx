import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'HOME'
    };
  }
    renderLander() {
    return (
    <header>
        <nav className="navbar navbar-fixed-top">
          <div className="container-fluid">
            <div className="site-nav-wrapper">
              <div className="navbar-header">
                <span id="mobile-nav-open-btn">&#9776;</span>
                <a href="#home" className="navbar-brand smooth-scroll">
                  <img src="img/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="container-fluid">
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav pull-right">
                    <li>
                      <a href="#home" className="smooth-scroll">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="smooth-scroll">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#team" className="smooth-scroll">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="smooth-scroll">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="smooth-scroll">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#blog" className="smooth-scroll">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="smooth-scroll">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="#login"
                        data-toggle="modal"
                        title="Login"
                        className="login-btn"
                      >
                        <i className="fa fa-user"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="mobile-nav">
                <span id="mobile-nav-close-btn">&times;</span>
                <div id="mobile-nav-content">
                  <ul className="nav">
                    <li>
                      <a href="#home" className="smooth-scroll">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="smooth-scroll">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#team" className="smooth-scroll">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="smooth-scroll">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="smooth-scroll">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#blog" className="smooth-scroll">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="smooth-scroll">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  render() {
    return (
      <div className="NavigationDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Navigation;
