import React from 'react';
import './App.css';
import {useAdaptive} from '../hooks'
import {MobileHeader} from "../Header/MobileHeader";
import {TabletHeader} from "../Header/TabletHeader";
import {DesktopHeader} from "../Header/DesktopHeader";


function App() {
  const {isDesktop, isMobile, idTablet} = useAdaptive()
  return (
    <div className="App">
      {isDesktop && <DesktopHeader/>}
      {isMobile && <MobileHeader/>}
      {idTablet && <TabletHeader/>}
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
