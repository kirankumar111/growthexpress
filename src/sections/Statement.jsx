import React from 'react';


class Statement extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      quote: "The successful warrior is the average man, with laser-like focus.."
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
      <section id="statement">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow fadeIn">
                <div id="tech-statement" className="text-center">
                  <h3>
                    <i className="fa fa-quote-left"></i>{this.state.quote}<i className="fa fa-quote-right"></i>
                  </h3>
                  <p>- Bruce Lee -</p>
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
      <div className="StatementDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Statement;