import React from 'react';
import './AboutMe.css';
import me from '../../assets/me.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__wrapper">
        <h2 className="aboutMe__title">About me</h2>
        <div className="aboutMe__content">
          <div
            className="aboutMe__photo"
            style={{ backgroundImage: `url(${me})` }}
          >
          </div>
          <div className="aboutMe__skills">
            <ul className="aboutMe__hard">
              <li className="aboutMe__hard_item">HTML, CSS, JS</li>
              <li className="aboutMe__hard_item">React JS, Redux</li>
              <li className="aboutMe__hard_item">SASS/SCSS, Webpack, GIT</li>
            </ul>
            <ul className="aboutMe__soft">
              <li className="aboutMe__soft_item">responsible</li>
              <li className="aboutMe__soft_item">teamworker</li>
              <li className="aboutMe__soft_item">selflearning</li>
              <li className="aboutMe__soft_item">ambitious</li>
              <li className="aboutMe__soft_item">critical thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
