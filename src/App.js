import React from 'react';
import Count from './coponents/Count';
import FetchOne from './coponents/FetchOne';
import FetchMany from './coponents/FetchMany';


let theme = {
  light: {
    color: 'red',
    padding: 16,
    backgroundcolor: 'green'
  },
  dark: {
    color: 'yellow',
    padding: 16,
    backgroundcolor: 'red',
    width: 500,
    border: '1px solid grey',
    title: {
      border: '10px solid green'
    },
    cursor: 'pointer'
  }
}

let MyTheme = React.createContext(theme);

function App(){
  return(
    <MyTheme.Provider value={theme.dark}>
      <Count />
      <FetchMany />
    </MyTheme.Provider>
  )
}

export {App as default, MyTheme};