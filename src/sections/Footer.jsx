import React from "react";

class Footer extends React.Component {
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
      <footer>
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-3 colmd-6 col-sm-6 col-6">
              <div className="thumbfooter">
                <h4>Navigation</h4>
                <ul className="footermenu">
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 colmd-6 col-sm-6 col-6">
              <div className="thumbfooter">
                <h4>Navigation</h4>
                <ul className="footermenu">
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 colmd-6 col-sm-6 col-6">
              <div className="thumbfooter">
                <h4>Navigation</h4>
                <ul className="footermenu">
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 colmd-6 col-sm-6 col-6">
              <div className="thumbfooter">
                <h4>Navigation</h4>
                <ul className="footermenu">
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                  <li>
                    <a href="#">Link here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="scpy">
          Copyright © 2021 All Rights Reserved By Growth Express Inc
        </div>
      </footer>
    );
  }
  render() {
    return <div className="FooterDiv">{this.renderLander()}</div>;
  }
}

export default Footer;
