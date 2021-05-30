import React from 'react';
import TeamList from '../components/TeamList';
import ProgressList from '../components/progressElements';

class Team extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      describe: "“For the person trying to do everything alone, the game really is over. If you want to do something big, you must link up with others. One is too small a number to achieve greatness.That’s the Law of Significance.”"
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
      <section id="team">
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 wow slideInLeft"
                data-wow-duration="1s"
              >
                <div id="team-left">
                  <div className="vertical-heading">
                    <h5>Who We Are</h5>
                    <h2>
                      Meet Our
                      <br />
                      <strong>Coaches</strong>
                    </h2>
                  </div>
                  <br />
                  <p>{this.state.describe}</p>
                </div>
              </div>
              <TeamList />
              <ProgressList />
            </div>
          </div>
        </div>
      </section>
    );
  }
  render() {
    return (
      <div className="TeamDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Team;
