import React from 'react';
import BlogElement from '../components/blogElements';

class Blogs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true
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
                {/* <div id="blog-btn">
                  <a
                    className="btn btn-general btn-yellow"
                    href="#"
                    title="View All Posts"
                    role="button"
                    >View All Posts</a
                  >
                </div> */}
              </div>
            </div>
            <div className="col-sm-8 col-md-7 wow fadeInUp" data-wow-duration="1s">
              <BlogElement />
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