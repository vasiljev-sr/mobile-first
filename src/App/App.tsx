import React from 'react';
import './App.css';
import {useAdaptive} from '../hooks'
import {MobileHeader} from "../Header/MobileHeader";


function App() {
  const {isDesktop, isMobile, idTablet} = useAdaptive()
  return (
    <div className="App">
      {isDesktop && <h1>Desktop</h1>}
      {isMobile && <MobileHeader/>}
      {idTablet && <h1>Desktop</h1>}
      <div className="container">
        <div className="content"><p className="title">Путешествовать</p>
          <p className='title'>-круто!</p>
        </div>
        <div className='button'>
          <span>Поехали с нами</span>
        </div>

      </div>
    </div>
  );
}

export default App;
