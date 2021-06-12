import React from 'react';
import contentDict from '../config/dynamicData';

const PortfolioList = () => {
  let portfolioData = contentDict.portfolioElements.map((element,index) => {
    return (
      <div className= {`col-xs-12 col-sm-6 col-md-3 ${element.filters}`} key = {index}>
        <div className="portfolio-item">
          <a href={element.imgUrl} title="Add Description">
            <img
              src={element.imgUrl}
              className="img-responsive"
              alt={element.imgAlt}
            />
            <div className="portfolio-item-overlay">
              <div className="portfolio-item-details text-center">
                <h3>{element.heading}</h3>
                <span></span>
                <p></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <div id="isotope-container">{portfolioData}</div>;
};

export default PortfolioList;
