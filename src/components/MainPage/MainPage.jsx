import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Greet from '../Greet/Greet.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import SwitchButton from '../SwitchButton/SwitchButton.jsx';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const prevPosition = useSelector((state) => state.control.prevPosition);
  const trigger = useSelector((state) => state.control.trigger);

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  React.useEffect(() => {
    window.scrollTo({
      top: prevPosition,
      behavior: 'instant',
    });
  }, [trigger]);

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
