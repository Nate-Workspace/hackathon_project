import { useState } from 'react'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Event from './Pages/Event'

import { LeftNav } from './components/LeftNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Buyer from './pages/Buyer';


function App() {
  return (
    <div className='App flex'>
      <Router>
        <div className="h-screen" style={{ width: '200px' }}>
          <LeftNav />
        </div>
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Products' element={<Product />}/>
            <Route path='/Services' element={<Service />}/>
            <Route path='/Events' element={<Event />}/>
            <Route path='/Buyer' element={<Buyer />}/>
            <Route path='/Seller' />
            <Route path='/Create' />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
