import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideosList from './components/VideosList/VideosList';
import VideosContextProvider from './contexts/videosContext';

const App = () => {
  return (
    <VideosContextProvider>
      <BrowserRouter>
        <h1>Header</h1>
        <Routes>
          <Route path="/" element={<VideosList />} />
        </Routes>
        <h1>Footer</h1>
      </BrowserRouter>
    </VideosContextProvider>
  );
};

export default App;