import React from 'react';
import contentDict from '../config/dynamicData';

const TestimonialElements = () => {
  let TestimonialDiv = contentDict.testimonialElements.map((item,index) => {
    return (
      <div className="testimonial" key={index}>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <h3>{item.subject}</h3>
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
        <p>{item.content}</p>
        <div className="author">
          <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-2">
              <img
                src={item.profilPic}
                alt="client"
                className="img-responsive img-circle"
              />
            </div>
            <div className="col-xs-6 col-sm-3 col-md-10">
              <div className="author-name-des">
                <p>{item.name}</p>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="testimonial-slider" className="owl-carousel owl-theme">
        {TestimonialDiv}
    </div>
  );
};

export default TestimonialElements;
