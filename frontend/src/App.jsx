import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointments from './pages/Appointments'
import Profile from './pages/Profile'
import checkUp from './pages/checkUp'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:specialty" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/docId" element={<Appointments />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/checkup" element={<checkUp/>} />
      </Routes>
      <Footer />
    </div>
      
  )
}

export default App
