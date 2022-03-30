import React from 'react';
import EmailIcon from '../images/email.png';
import LinkedInIcon from '../images/linkedin.png';
import ProfPic from '../images/Yanik.jpg';

function Info() {
  return (
    <div className="info">
      <img src={ProfPic} alt="Profile" id="profile-pic" />
      <div className="info-text">
        <h3>Yanik Nayee</h3>
        <h4>Frontend Developer</h4>
      </div>
      <div className="info-links">
        <a href="mailto:yaniknayee123@gmail.com">
          <button type="button" id="email">
            <img src={EmailIcon} alt="Email Icon" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/yanik-nayee-b4b490200">
          <button type="button" id="linkedin">
            <img src={LinkedInIcon} alt="Linked In Icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
