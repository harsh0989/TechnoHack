import './App.css';
import Splashpage from './pages/Splashpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactList from './pages/ContactList';
import GMap from './pages/GMap';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Splashpage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/contactlist' element={<ContactList />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
