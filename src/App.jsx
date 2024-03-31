import { LeftNav } from './components/LeftNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

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
            <Route path='/Products' />
            <Route path='/Services' />
            <Route path='/Events' />
            <Route path='/Buyer' />
            <Route path='/Seller' />
            <Route path='/Create' />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
