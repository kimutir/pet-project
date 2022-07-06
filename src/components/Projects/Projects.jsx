import React from 'react';
import './Projects.css';
import calcImg from '../../assets/preview/calculator.png';
import calcGIF from '../../assets/preview/calculator.gif';
import engIMG from '../../assets/preview/english.png';
import engGIF from '../../assets/preview/english.gif';
import gallIMG from '../../assets/preview/gallery.png';
import gallGIF from '../../assets/preview/gallery.gif';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: 'calculator',
      text: 'Basic calculator but with history log. You can go back and change the result!',
      img: calcImg,
      gif: calcGIF,
    },

    {
      title: 'english',
      text: 'English cards to make your learning easier',
      img: engIMG,
      gif: engGIF,
    },
    {
      title: 'gallery',
      text: '3D gallery with 10 random photos',
      img: gallIMG,
      gif: gallGIF,
    },
  ];

  return (
    <>
      <div className="projects">
        <h2 className="projects__title"> Projects</h2>
        {projects.map((item) => {
          return (
            <ProjectItem
              key={item.title}
              img={item.img}
              arr={projects}
              item={item}
              href={`/${item.title}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
