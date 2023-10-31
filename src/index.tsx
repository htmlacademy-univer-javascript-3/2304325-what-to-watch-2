import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mockFilmData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...mockFilmData}/>
  </React.StrictMode>
);
