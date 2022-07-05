import React from 'react';
import aboutIcon from '../../assets/icons/about.png';
import projectsIcon from '../../assets/icons/projects.png';
import homeIcon from '../../assets/icons/home.png';
import contactIcon from '../../assets/icons/contact.png';
import { useDispatch, useSelector } from 'react-redux';
import { findElementsAction } from '../../store/navigationReducer';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);
  const navVisible = useSelector((state) => state.control.navVisible);

  if (navVisible) {
    elements.navigation.style.opacity = '1';
  }

  React.useEffect(() => {
    dispatch(
      findElementsAction({
        home: document.querySelector('.greet'),
        aboutMe: document.querySelector('.aboutMe'),
        projects: document.querySelector('.projects'),
        contact: document.querySelector('.contact'),
        navigation: document.querySelector('.nav'),
        switch: document.querySelector('.switch'),
      })
    );
  }, []);

  const handleClick = (elem) => {
    elem.scrollIntoView();
  };

  return (
    <>
      <nav className="nav">
        <a className="nav__item" onClick={() => handleClick(elements.home)}>
          <img className="nav__icon" src={homeIcon} />
        </a>
        <a className="nav__item" onClick={() => handleClick(elements.aboutMe)}>
          <img className="nav__icon" src={aboutIcon} />
        </a>
        <a className="nav__item" onClick={() => handleClick(elements.projects)}>
          <img className="nav__icon" src={projectsIcon} />
        </a>
        <a className="nav__item" onClick={() => handleClick(elements.contact)}>
          <img className="nav__icon" src={contactIcon} />
        </a>
      </nav>
    </>
  );
};

export default Navigation;
