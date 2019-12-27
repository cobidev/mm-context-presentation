import React, { useContext } from 'react';
import GifContext from '../context/GifContext';

const GenerateGifButton = () => {
  const { isVisible, handleToggleGif } = useContext(GifContext);

  return (
    <button
      type="button"
      className="button"
      onClick={() => (isVisible ? handleToggleGif('close') : handleToggleGif('open'))}
    >
      {isVisible ? `close` : `show me`}
    </button>
  );
};
export default GenerateGifButton;
