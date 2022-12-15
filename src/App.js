import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Page from './pages/page';

const img67 ='https://www.ljplus.ru/img4/m/i/miss_apriori/40743208.jpg'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Page img='img/1.jpg' title='модель 01'/>}/>
        <Route path='/shop' element={<Page img='img/2.jpg' title='модель 02'/>}/>
        <Route path='/products' element={<Page img='img/3.jpg' title='модель 03'/>}/>
        <Route path='*' element={<Page img={img67} title='модель 04'/>}/>
      </Routes>
    </div>
  );
}

export default App;