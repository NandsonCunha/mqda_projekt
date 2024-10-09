import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataRoom, setDataRoom] = useState(null);

  return (
    <DataContext.Provider value={{ dataRoom, setDataRoom }}>
      {children}
    </DataContext.Provider>
  );
};
