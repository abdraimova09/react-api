import React from 'react';
import VideosList from './components/VideosList/VideosList';
import VideosContextProvider from './contexts/videosContext';

const App = () => {
  return (
    <VideosContextProvider>
      {/* components */}
      <VideosList />
      {/* header
            section
            footer */}
    </VideosContextProvider>
  );
};

export default App;