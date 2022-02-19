import './App.css';
import Splashpage from './pages/Splashpage'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactList from './pages/ContactList';
import GMap from './pages/GMap';
import Dashboard from './pages/Dashboard';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Splashpage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/contactlist' element={<ContactList />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
