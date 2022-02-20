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
import News from './pages/News';
import AuditForm from './pages/AuditForm';
import SafetySpots from './pages/SafetySpots';
import FakeCall from './pages/FakeCall';


function App() {

  const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    return token ? <Outlet /> : <Navigate to="/login" />
  }

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#E33E7F'
      }
    }
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Splashpage />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route path='/news' element={<News />} />
            <Route path='/safetyspots' element={<SafetySpots />} />
            <Route path='/dashboard' element={<PrivateRoute />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/contactlist' element={<PrivateRoute />} >
              <Route path='/contactlist' element={<ContactList />} />
            </Route>
            <Route path='/auditform' element={<PrivateRoute />} >
              <Route path='/auditform' element={<AuditForm />} />
            </Route>
            <Route path='/fakecall' element={<PrivateRoute />} >
              <Route path='/fakecall' element={<FakeCall />} />
            </Route>
          </Routes>
        </Router>
      </MuiThemeProvider>


    </>
  )

}

export default App;
