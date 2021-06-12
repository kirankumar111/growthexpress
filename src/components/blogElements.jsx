import React from 'react';
import contentDict from '../config/dynamicData';

const BlogElements = () => {
  let BlogDiv = contentDict.blogElements.map((item,index) => {
    return (
      <div className="col-sm-6 col-md-6" key={index}>
        <div className="blog-post">
          <div className="skill">
            <h4>{item.title}</h4>
            <p>{item.hashtags}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
            <div className="post-meta">
              <div className="row">
                <div className="col-xs-5 col-sm-6 col-md=6">
                  <p>
                    <img
                      src={item.profilPic}
                      className="img-circle"
                      alt="author"
                    />
                    {item.name}
                  </p>
                </div>
                <div className="col-xs-7 col-sm-6 col-md=6">
                  <p className="text-right">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
        {BlogDiv}
    </div>
  );
};

export default BlogElements;
