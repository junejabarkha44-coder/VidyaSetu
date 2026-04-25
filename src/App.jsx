import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Login from './Login';
import College from './College';
import Department from './Department';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import CourseReg from './CourseReg';
import Courreg from './courreg';
import ConnectReg from './Connectreg';
import Shikhaa from './Shikhaa';
import ConnectHome from './ConnectHome';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Button from './Button';
import Slider from './Slider';
import Courses from './Courses';
import Lerno from './Lerno';
import Connect from './Connect';
import Chatbot from './Chatbot';
import Notes from './Notes';


import './header.css';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/learning' element={<Lerno />} />
          <Route path='/progress' element={<Department />} />
          <Route path='/explore' element={<Department />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/start' element={<Chatbot />} />
          
          {/* Nested Routes for Connect */}
          <Route path="/connect" element={<Connect />}>
            <Route index element={<ConnectHome />} />
            <Route path='binni' element={<Shikhaa />} />
          </Route>

          {/* Nested Routes for Course Registration */}
          <Route path="/courreg" element={<Courreg />}>
            <Route index element={<ConnectReg />} />
            <Route path='registration' element={<CourseReg />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
            
      </main>
    
    </div>
  );
}

export default App;

