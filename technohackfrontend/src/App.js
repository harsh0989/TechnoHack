import './App.css';
import Splashpage from './pages/Splashpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
function App() {
  return (
    
    <Router>
      <Navbar style={{position:'absolute',zIndex:'1'}} />
      <Routes>
        <Route exact path='/' element={<Splashpage />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>

  )

}

export default App;
