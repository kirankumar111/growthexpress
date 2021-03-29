import React from 'react';


class Map extends React.Component {
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
    <section id="google-map">
      <div className="container-fluid">
        <div className="row">
          <div id="map"></div>
        </div>
      </div>
    </section>

    );
  }
  render() {
    return (
      <div className="MapDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Map;