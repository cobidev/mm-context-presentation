import React, { useState, useEffect } from 'react';
import { GifProvider } from './context/GifContext';
import HomePage from './components/HomePage';
import axios from 'axios';

function App() {
  const [gif, setGif] = useState({
    url: '',
    isVisible: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = await getRandomGif();
      setGif({ ...gif, url });
    };
    fetchData();
  }, [gif]);

  const toggleGif = async () => {
    const url = await getRandomGif();

    setGif({
      ...gif,
      url: gif.isVisible ? url : gif.url,
      isVisible: !gif.isVisible,
    });
  };

  const getRandomGif = async () => {
    const res = await axios.get(
      'https://api.giphy.com/v1/gifs/random?api_key=gH7glaXpjdIJUfGdtE2GO5FSQzi09bbY&tag=Cat&rating=G'
    );
    const data = await res.data.data.fixed_height_downsampled_url;

    return data;
  };

  return (
    <GifProvider value={{ ...gif, toggleGif }}>
      <HomePage />
    </GifProvider>
  );
}

export default App;
