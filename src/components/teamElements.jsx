import React from "react";
import contentDict from "../config/dynamicData";

const TeamList = () => {
  let teamData = contentDict.teamList.map((member) => {
    return <div className="team-member" key={member.id}>
      <img src={member.src} alt="team member" className="img-responsive" />
      <div className="team-member-overlay">
        <div className="team-member-info text-center">
          <h6>{member.name}</h6>
          <p>{member.title}</p>
          <ul className="social-list">
            {member.socialList.map(profileItem => (
              <li key={profileItem.profile}><a href={profileItem.link} target="_blank" rel="noopener noreferrer"><i className={profileItem.className}></i></a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  });

  return (
    <div className="col-sm-6 col-md-6 wow slideInRight" data-wow-duration="1s">
      <div id="team-members" className="owl-carousel owl-theme">
        {teamData}
      </div>
    </div>
  );
}

export default TeamList