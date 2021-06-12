import React from 'react';
import contentDict from '../config/dynamicData';

const NavigationList = () => {
  let navigationData = contentDict.navigationElements.map((title) => {
    return (
        <a href={title.link} className="smooth-scroll">
          {title.name}
        </a>
    );
  });

  return (
    <li>
      {navigationData}
    </li>
  );
};

export default NavigationList;
