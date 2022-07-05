import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery.jsx';
import LearnEnglish from './components/LearnEnglish/LearnEnglish.jsx';
import Calculator from './components/Calculator/Calculator.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.jsx';

const App = () => {
  React.useEffect(() => {
    document.body.classList.add('wrapper');
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/english" element={<LearnEnglish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
