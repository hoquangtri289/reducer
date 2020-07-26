import React from 'react';
import Count from './components/count/Count';
import FetchOne from './components/fetch/FetchOne'
import FetchMany from './components/fetch/FetchMany';
import CountABCD from './components/count/CountABCD'
import UseCallBack from './components/useCallBack/Parent';
import Memo from './components/useMemo/Memo';
import DocTitleA from './components/useHooks/DocTitleA';
import DocTitleB from './components/useHooks/DocTitleB';


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
      {/* <UseCallBack /> */}
      {/* <Memo /> */}
      <DocTitleA />
      <DocTitleB />
      {/* <FetchOne /> */}
      {/* <FetchMany /> */}
    </MyTheme.Provider>
  )
}

export {App as default, MyTheme};