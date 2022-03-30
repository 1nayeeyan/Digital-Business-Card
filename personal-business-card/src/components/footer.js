import React from 'react';
import GitHubIcon from '../images/github.png';

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/1nayeeyan/Web-Development-Projects">
        <button type="button" id="github">
          <img src={GitHubIcon} alt="Github Icon" />
        </button>
      </a>
    </div>
  );
}

export default Footer;
