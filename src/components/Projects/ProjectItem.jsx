import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPrevPosotionAction } from '../../store/controlReducer';

const ProjectItem = ({ item, href, arr }) => {
  const dispatch = useDispatch();
  const sendPosition = () => {
    const prevPosition = window.pageYOffset;
    dispatch(setPrevPosotionAction(prevPosition));
  };

  // const prev = item;

  React.useEffect(() => {
    const projectImg = document.querySelectorAll('.projects__image');
    projectImg.forEach((preview, index) => {
      preview.addEventListener('mouseover', (e) => {
        e.target.src = `${arr[index].gif}`;
      });
      preview.addEventListener('mouseout', (e) => {
        e.target.src = `${arr[index].img}`;
      });
    });
  });
  return (
    <div className="projects__item">
      <div className="projects__description">
        <h3 className="projects__title">{item.title}</h3>
        <p className="projects__text">{item.text}</p>
      </div>
      <Link to={href}>
        <img
          className="projects__image"
          src={item.img}
          onClick={() => sendPosition()}
        ></img>
      </Link>
    </div>
  );
};

export default ProjectItem;
