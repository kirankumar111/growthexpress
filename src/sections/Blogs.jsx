import React from "react";

class Blogs extends React.Component {
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
      <section id = "blogs" className="article">
        <div className="container">
          <div className="row">
            <div className="socialmedai">
              <ul>
                <li className="youtube">
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="whatsapp">
                  <a href="#">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 offset-lg-5 col-xl-5 col-sm-12 col-sm-12">
              <div className="sectiontitle">
                <div className="sectiontitle">
                  <h2>
                    Our Recent<span> Articles Posts</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div id="flyer" className="owl-carousel owl-theme mt-3">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="postverticle">
                        <img src="img/mobile.png" className="img-fluid" />
                        <div className="postinfo">
                          <p>
                            {" "}
                            Your Vision Will Become Clear only when you can look
                            into your won heart. who looks outside, dreams; who
                            looks inside, awakes.
                          </p>
                          <span className="author">- Carl Jung</span>
                        </div>
                        <div className="authordata">
                          <div className="row">
                            <div className="col-lg-4 col-sm-4 col-4">
                              <div className="authorpic">
                                <img src="img/003.jpg" className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-sm-8 col-8">
                              <div className="socialmedai">
                                <ul>
                                  <li className="youtube">
                                    <a href="#">
                                      <i className="fa fa-youtube-play"></i>
                                    </a>
                                  </li>
                                  <li className="twitter">
                                    <a href="#">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="linkedin">
                                    <a href="#">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="facebook">
                                    <a href="#">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="whatsapp">
                                    <a href="#">
                                      <i className="fa fa-whatsapp"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="d-flex align-item-center">
                        <div className="centeralign">
                          <div className="bgcolor">
                            <p>
                              “Great spirits have always encountered violent
                              opposition from mediocre minds.”
                            </p>
                            <span className="authorename">
                              -Albert Einstein
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="postverticle">
                        <img src="img/mobile.png" className="img-fluid" />
                        <div className="postinfo">
                          <p>
                            {" "}
                            Your Vision Will Become Clear only when you can look
                            into your won heart. who looks outside, dreams; who
                            looks inside, awakes.
                          </p>
                          <span className="author">- Carl Jung</span>
                        </div>
                        <div className="authordata">
                          <div className="row">
                            <div className="col-lg-4 col-sm-4 col-4">
                              <div className="authorpic">
                                <img src="img/003.jpg" className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-sm-8 col-8">
                              <div className="socialmedai">
                                <ul>
                                  <li className="youtube">
                                    <a href="#">
                                      <i className="fa fa-youtube-play"></i>
                                    </a>
                                  </li>
                                  <li className="twitter">
                                    <a href="#">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="linkedin">
                                    <a href="#">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="facebook">
                                    <a href="#">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="whatsapp">
                                    <a href="#">
                                      <i className="fa fa-whatsapp"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                      <div className="d-flex align-item-center">
                        <div className="centeralign">
                          <div className="bgcolor">
                            <p>
                              “Great spirits have always encountered violent
                              opposition from mediocre minds.”
                            </p>
                            <span className="authorename">
                              -Albert Einstein
                            </span>
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
      // <section id="blog">
      //   <div classNameName="content-box-md">
      //     <div classNameName="container">
      //       <div classNameName="row">
      //         <div classNameName="col-sm-4 col-md-5 wow slideInLeft">
      //           <div id="blog-left">
      //             <div classNameName="vertical-heading">
      //               <h5>Latest News</h5>
      //               <h2>
      //                 Recent <br />
      //                 <strong>Articles</strong>
      //               </h2>
      //             </div>
      //             <p>Build your brand!</p>
      //             <div id="blog-btn">
      //               <a
      //                 classNameName="btn btn-general btn-yellow"
      //                 href="#"
      //                 title="View All Posts"
      //                 role="button"
      //                 >View All Posts</a
      //               >
      //             </div>
      //           </div>
      //         </div>
      //         <div classNameName="col-sm-8 col-md-7 wow fadeInUp" data-wow-duration="1s">
      //           <div classNameName="row">
      //             <div classNameName="col-sm-6 col-md-6">
      //               <div classNameName="blog-post">
      //                 <h4>Do you have an Eagle attitude?</h4>
      //                 <p>#growth #attitude #onedayatatime</p>
      //                 <a href="https://www.linkedin.com/pulse/do-you-have-eagle-attitude-kiran-kumar/?trackingId=9qoBt%2B%2BbJYVlKFnFkkArfw%3D%3D" target="_blank">Read More</a>
      //                 <div classNameName="post-meta">
      //                   <div classNameName="row">
      //                     <div classNameName="col-xs-5 col-sm-6 col-md=6">
      //                       <p>
      //                         <img
      //                           src="img/blog/user-1.jpg"
      //                           classNameName="img-circle"
      //                           alt="author"
      //                         />
      //                         Kiran Kumar
      //                       </p>
      //                     </div>
      //                     <div classNameName="col-xs-7 col-sm-6 col-md=6">
      //                       <p classNameName="text-right">August 28th 2019</p>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //             <div classNameName="col-sm-6 col-md-6">
      //               <div classNameName="blog-post">
      //                 <h4>How to cope with Negative thoughts/Negativity</h4>
      //                 <p>#growth #attitude #onedayatatime</p>
      //                 <a href="https://www.linkedin.com/pulse/how-cope-negative-thoughtsnegativity-bharat-pinninti/" target="_blank">Read More</a>
      //                 <div classNameName="post-meta">
      //                   <div classNameName="row">
      //                     <div classNameName="col-xs-5 col-sm-6 col-md=6">
      //                       <p>
      //                         <img
      //                           src="img/blog/user-2.jpg"
      //                           classNameName="img-circle"
      //                           alt="author"
      //                         />
      //                         Bharat Pinninti
      //                       </p>
      //                     </div>
      //                     <div classNameName="col-xs-7 col-sm-6 col-md=6">
      //                       <p classNameName="text-right">July 4th 2019</p>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
  render() {
    return <div className="BlogsDiv">{this.renderLander()}</div>;
  }
}

export default Blogs;
