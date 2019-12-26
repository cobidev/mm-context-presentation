import React from 'react';

const GifContext = React.createContext();

export const GifProvider = GifContext.Provider;
export const GifConsumer = GifContext.Consumer;
export default GifContext;
