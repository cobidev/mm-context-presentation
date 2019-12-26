import React, { useState } from 'react';
import axios from 'axios';
import { GifProvider } from './context/GifContext';
import HomePage from './components/HomePage';

const App = () => {
  // state
  const [gif, setGif] = useState({
    url: '',
    isVisible: false,
  });

  // methods
  const getRandomGif = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G`
    );
    const url = await res.data.data.fixed_height_downsampled_url;
    return url;
  };

  const handleToggleGif = async choice => {
    let url;
    switch (choice) {
      case 'open':
        url = await getRandomGif();
        setGif({
          ...gif,
          url,
          isVisible: true,
        });
        break;
      case 'close':
        setGif({
          ...gif,
          isVisible: false,
        });
        break;
      default:
        break;
    }
  };

  return (
    <GifProvider value={{ ...gif, handleToggleGif }}>
      <HomePage />
    </GifProvider>
  );
};

export default App;
