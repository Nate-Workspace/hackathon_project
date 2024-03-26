import { LeftNav } from './components/LeftNav'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Sell from './components/Sell'

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
          <Route path='/sell' element={<Sell />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
