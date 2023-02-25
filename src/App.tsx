import React from 'react';
import Header from './components/Header'
import './App.css'
import Converter from './components/Converter';

function App() {

  return (
    <div >
      <Header/>
      <div className='appContent'>
        <h1 className='currencyConvertH1'>Конвертер валют:</h1>
        <Converter/>  
      </div>
    </div>
  );
}

export default App;
