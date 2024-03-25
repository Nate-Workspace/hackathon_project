import { useState } from 'react'
import { LeftNav } from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className='App'>
      <Router>
        <LeftNav/>
        <Routes>
          <Route path='/'/>
          <Route path='/Explore'/>
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
