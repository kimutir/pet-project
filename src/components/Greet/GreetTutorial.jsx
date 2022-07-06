import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GreetStyles.css';
import Button from '../Buttons/Button.jsx';
import { switchVisibleAction } from '../../store/controlReducer';

const GreetTutorial = ({ greetThree }) => {
  let [div, setDiv] = React.useState([]);
  const [idCounter, setIdCounter] = React.useState(1);
  const dispatch = useDispatch();

  const elements = useSelector((state) => state.elements);
  const contentItems = [
    {
      id: 1,
      type: 'navbar',
      text: 'Each icon scrolls to <br> proper section',
      action: () => {
        dispatch(switchVisibleAction());
      },
    },
    {
      id: 2,
      type: 'switch',
      text: 'Switch to peach or <br> dark-blue back again!',
      action: () => {
        elements.aboutMe.scrollIntoView();
      },
    },
    {
      id: 3,
      type: 'about',
      text: 'Few words about myself.',
      action: () => {
        elements.projects.scrollIntoView();
      },
    },
    {
      id: 4,
      type: 'projects',
      text: 'Clicking on preview <br> opens projects',
      action: () => {
        elements.contact.scrollIntoView();
      },
    },
    {
      id: 5,
      type: 'contact',
      text: 'Give your feedback please',
      action: () => {
        closeTutorial();
      },
    },
  ];

  // ===== наполняем элементы текстом ======
  React.useEffect(() => {
    setDiv((div = document.querySelectorAll('.greet__tutorial_content')));
    const title = document.querySelectorAll('.greet__tutorial_title');
    const description = document.querySelectorAll('.greet__tutorial_text');
    contentItems.forEach((item, index) => {
      title[index].textContent = item.type;
      description[index].innerHTML = item.text;
    });
  }, []);

  // ======= скрываем и показываем элементы ========
  React.useEffect(() => {
    contentItems.forEach((item, index) => {
      div[index].style.visibility = 'hidden';
      if (idCounter === item.id) {
        div[idCounter - 1].style.visibility = 'visible';
      }
    });
  }, [idCounter]);

  const closeTutorial = () => {
    document.body.style.overflow = 'auto';
    setIdCounter(8);
    elements.home.scrollIntoView();
    document.querySelector('.tutrorial__cross').style.display = 'none';
    greetThree();
  };

  return (
    <>
      <div className="tutrorial__cross" onClick={closeTutorial}></div>
      {contentItems.map((item) => {
        return (
          <div
            key={item.id}
            className={`greet__tutorial_content greet__tutorial_${item.type}`}
          >
            <p className="greet__tutorial_title"> </p>
            <p className="greet__tutorial_text"></p>

            {item.action ? (
              <Button
                onClick={() => {
                  setIdCounter((idCounter) => idCounter + 1);
                  item.action();
                }}
                className="greet__tutorial_buttons"
              >
                ok
              </Button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default GreetTutorial;
