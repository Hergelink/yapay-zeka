import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/dashboard/Dashboard';
import HeroSection from './pages/landing-page-files/HeroSection';
import LandingPage from './pages/landing-page-files/LandingPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
