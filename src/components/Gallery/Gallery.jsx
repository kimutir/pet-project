import React, { useRef } from 'react';
import galleryStyle from './Gallery.module.css';
import { Link } from 'react-router-dom';
import ButtonBack from '../Buttons/ButtonBack';

const Gallery = () => {
  const [count, setCount] = React.useState([]);
  const sectionRef = useRef();
  const spaceBetween = -1000;
  let initialPosition = -400;
  const positions = [];

  // =========== запрашиваем и вставляем фото ============
  const randomPhotos = () => {
    const randomPhotosURL =
      'https://api.unsplash.com/photos/random?count=10&client_id=DZKBB0OLOmKC7sIvp41e8Al5g0RtRK7L_DpoE61AJWo';
    return fetch(randomPhotosURL)
      .then((response) => response.json())
      .then((data) =>
        data.map((item, index) => {
          setCount((count) => [...count, item.urls]);

          // ======= стоит вынести эту логику? ==========
          const divExternal = document.createElement('div');
          divExternal.classList.add(`${galleryStyle.frame}`);
          const divInternal = document.createElement('div');
          divInternal.classList.add(`${galleryStyle.frame__img}`);
          divInternal.style.backgroundImage = ` url(${item.urls.regular}`;
          if (index % 2 === 0) {
            divInternal.classList.add(`${galleryStyle.img__left}`);
          } else {
            divInternal.classList.add(`${galleryStyle.img__right}`);
          }
          divExternal.append(divInternal);
          sectionRef.current.append(divExternal);
        })
      );
  };

  React.useEffect(() => {
    document.body.classList.add('gallery__background');
    randomPhotos();
    return () => {
      document.body.classList.remove('gallery__background');
    };
  }, []);

  // ========== находим нужные элементы ========
  const elements = React.useMemo(() => {
    const frames = Array.from(
      document.getElementsByClassName(`${galleryStyle.frame}`)
    );
    const pictures = Array.from(
      document.getElementsByClassName(`${galleryStyle.frame___img}`)
    );
    return { frames, pictures };
  }, [count]);

  const scrollFunc = () => {
    console.log('scroll from function');
    const top = document.documentElement.scrollTop;
    const delta = initialPosition - top;

    initialPosition = top;

    elements.frames.forEach((frame, i) => {
      positions.push(i * spaceBetween);
      positions[i] += delta * -1.5;
      const transfrom = `translateZ(${positions[i]}px)`;
      frame.style.transform = transfrom;
    });
  };

  // ========== функция для скролла =======
  React.useEffect(() => {
    window.addEventListener('scroll', scrollFunc);

    elements.pictures.forEach((picture, i) => {
      if (i % 2 === 0) {
        picture.style.transform = 'translateX(-60%)';
      } else {
        picture.style.transform = 'translateX(60%)';
      }
    });
    window.scrollTo(0, 1);

    return () => {
      window.removeEventListener('scroll', scrollFunc);
    };
  }, [count]);

  return (
    <div className={galleryStyle.wrapper}>
      <Link to="/">
        <ButtonBack></ButtonBack>
      </Link>

      <div className={galleryStyle.container}>
        <section className={galleryStyle.gallery} ref={sectionRef}></section>
      </div>
    </div>
  );
};

export default Gallery;
