import React from 'react';


class Footer extends React.Component {
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
    <footer className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              Copyright &copy; 2021 All Rights Reserved By <span>Growth Express</span> Inc
            </p>
          </div>
        </div>
      </div>
      <a
        href="#home"
        id="back-to-top"
        className="btn btn-sm btn-yellow btn-back-to-top smooth-scroll hidden-sm hidden-xs"
        title="Home"
        role="button"
        ><i className="fa fa-angle-up"></i
      ></a>
    </footer>
    );
  }
  render() {
    return (
      <div className="FooterDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Footer;