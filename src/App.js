import React from 'react';
import Count from './coponents/count/Count';
import FetchOne from './coponents/fetch/FetchOne'
import FetchMany from './coponents/fetch/FetchMany';
import CountABCD from './coponents/count/CountABCD'
import UseCallBack from './coponents/useCallBack/Parent';
import Memo from './coponents/useMemo/Memo';


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
      {/* <Count /> */}
      {/* <CountABCD /> */}
      <UseCallBack />
      <Memo />
      {/* <FetchOne /> */}
      {/* <FetchMany /> */}
    </MyTheme.Provider>
  )
}

export {App as default, MyTheme};