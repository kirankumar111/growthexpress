import React from 'react';


class YourSelf extends React.Component {
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
      <section className="yourself">
        <div className="container">
            <div className="row">
                <div className="col-xl- col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="listcategoires">
                        <ul>
                            <li><a href="#">Student</a></li>
                            <li><a href="#"> Professional</a></li>
                            <li><a href="#"> Entrepreneur</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl- col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="centeralign">
                        <div className="circlestra">
                            <h3 className="title">Tell Me About<span>Yourself</span> </h3>
                            <a href="#" className="btn mybutton">Learn More</a>
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
      <div className="YourSelfDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default YourSelf;