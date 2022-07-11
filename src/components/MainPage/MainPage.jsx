import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Greet from '../Greet/Greet.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import SwitchButton from '../SwitchButton/SwitchButton.jsx';
import { useSelector } from 'react-redux';

const MainPage = () => {
  React.useEffect(() => {
    if (Number(sessionStorage.getItem('needScroll'))) {
      window.scrollTo({
        top: Number(sessionStorage.getItem('position')),
        behavior: 'instant',
      });
      sessionStorage.setItem('needScroll', 0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
  }, []);

  // React.useEffect(() => {
  //   window.scrollTo({
  //     top: Number(sessionStorage.getItem('position')),
  //     behavior: 'instant',
  //   });
  // }, [trigger]);

  return (
    <>
      <Greet></Greet>
      <SwitchButton></SwitchButton>
      <Navigation></Navigation>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
};

export default MainPage;
