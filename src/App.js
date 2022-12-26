import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Page from './pages/page';
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'


const img67 ='https://www.ljplus.ru/img4/m/i/miss_apriori/40743208.jpg'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Page img={img1} title='модель 01'/>}/>
        <Route path='/shop' element={<Page img={img2} title='модель 02'/>}/>
        <Route path='/products' element={<Page img={img3} title='модель 03'/>}/>
        <Route path='*' element={<Page img={img67} title='модель 04'/>}/>
      </Routes>
    </div>
  );
}

export default App;