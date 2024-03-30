import { useState } from 'react'
import { LeftNav } from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Product from './Pages/Product'
import Service from './Pages/Service'
import Event from './Pages/Event'
function App() {

  return (
    <div className='App'>
      <Router>
        <LeftNav/>
        <Routes>
          <Route path='/'/>
          <Route path='/Explore'/>
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/event" element={<Event />} />
          <Route path='/Saved'/>
          <Route path='/Cart'/>
          <Route path='/Notification'/>
          <Route path='/Create'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
