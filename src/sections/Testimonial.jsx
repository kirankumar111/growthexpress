import React from 'react';


class Testimonial extends React.Component {
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
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="vertical-heading wow slideInLeft">
              <h5>Who We Are</h5>
              <h2>What Our <br /><strong>Participants</strong> Say</h2>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 wow fadeIn" data-wow-duration="2s">
            <div id="testimonial-slider" className="owl-carousel owl-theme">
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Coaching</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  I'm an Early Years Professional and am passionate about child development. I love working with families and received recognition as a Global Thought Leader from GFEL in 2019 and for entrepreneurial skills by Santander UK in 2020. With an aspiration of driving my career further while enjoying personal growth, I sought personal coaching. I am a parenting coach, hence I appreciate the value of a good coach, and was lucky to find PIM through Instagram. I've been working with Kiran Kumar for almost 2 months now, and I am already benefiting from the clarity in my goals, preparation, and accountability. The book club helps me learn more and is a very pleasant experience. Thanks a lot, Kiran, and the entire PIM & Growth Express team!
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-1.jpeg"
                        alt="client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p> Nikita Phadnavis </p>
                        <p> Parenting Coach </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Motivation Myth</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  Growth club is a weekly dose of strength! Doing something different than the crowd requires lots of courage and motivation. You need to leave those "Netflix and Chill" group and need to be surrounded by those who are thirsty to make this life count. 
                  Kiran is an awesome life coach. He helped me to clear my past failure baggages. I never had this courage to talk in public. But now I challenge myself every day for extending my ability. I have overcame the fear of rejection. The best thing about Kiran's mentoring is he never just talk, he makes sure that you put the things in action. 
                  Being the part of this club is the best thing happened to me in 2020. It has given me the opportunity to transform my life from "What I'm doing with this life?" to "What not can I do with this life!"
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-2.jpeg"
                        alt="Client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p>Uma Valiya</p>
                        <p>Senior Software Engineer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <h3>Growth Mindset</h3>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <div className="stars text-right">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <p>
                  I came to know about PIM & Growth Express through association of Kiran, my brother in law. I was facing midlife crisis after 13 years of work experience and feeling saturated. Then I came across this growth platform,  which smashed my wrong beliefs and gave me a Beginner mindset and reignited my entrepreneurial spirit. The weekly book club has given the forum to practice my interpersonal communication and public Speaking ability, share and exchange knowledge with like minded friends who believe in growth and learn from invited guest speakers. All in all, this forum helps me put the right perspective and learn from experienced leaders who are ahead of me.
                </p>
                <div className="author">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 col-md-2">
                      <img
                        src="img/testimonial/client-3.jpeg"
                        alt="Client"
                        className="img-responsive img-circle"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-3 col-md-10">
                      <div className="author-name-des">
                        <p>Girija Senapati</p>
                        <p>Fund Manager and Technologist</p>
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
      <div className="TestimonialDiv">
        {this.renderLander()}
      </div>
    );
  }
}

export default Testimonial;