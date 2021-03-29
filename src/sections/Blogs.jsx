import React from 'react';


class Blogs extends React.Component {
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
    <section id="blog">
      <div className="content-box-md">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-5 wow slideInLeft">
              <div id="blog-left">
                <div className="vertical-heading">
                  <h5>Latest News</h5>
                  <h2>
                    Recent <br />
                    <strong>Articles</strong>
                  </h2>
                </div>
                <p>Build your brand!</p>
                <div id="blog-btn">
                  <a
                    className="btn btn-general btn-yellow"
                    href="#"
                    title="View All Posts"
                    role="button"
                    >View All Posts</a
                  >
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-7 wow fadeInUp" data-wow-duration="1s">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <div className="blog-post">
                    <h4>Do you have an Eagle attitude?</h4>
                    <p>#growth #attitude #onedayatatime</p>
                    <a href="https://www.linkedin.com/pulse/do-you-have-eagle-attitude-kiran-kumar/?trackingId=9qoBt%2B%2BbJYVlKFnFkkArfw%3D%3D" target="_blank">Read More</a>
                    <div className="post-meta">
                      <div className="row">
                        <div className="col-xs-5 col-sm-6 col-md=6">
                          <p>
                            <img
                              src="img/blog/user-1.jpg"
                              className="img-circle"
                              alt="author"
                            />
                            Kiran Kumar
                          </p>
                        </div>
                        <div className="col-xs-7 col-sm-6 col-md=6">
                          <p className="text-right">August 28th 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6">
                  <div className="blog-post">
                    <h4>How to cope with Negative thoughts/Negativity</h4>
                    <p>#growth #attitude #onedayatatime</p>
                    <a href="https://www.linkedin.com/pulse/how-cope-negative-thoughtsnegativity-bharat-pinninti/" target="_blank">Read More</a>
                    <div className="post-meta">
                      <div className="row">
                        <div className="col-xs-5 col-sm-6 col-md=6">
                          <p>
                            <img
                              src="img/blog/user-2.jpg"
                              className="img-circle"
                              alt="author"
                            />
                            Bharat Pinninti
                          </p>
                        </div>
                        <div className="col-xs-7 col-sm-6 col-md=6">
                          <p className="text-right">July 4th 2019</p>
                        </div>
                      </div>
                    </div>
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
      <div className="BlogsDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Blogs;