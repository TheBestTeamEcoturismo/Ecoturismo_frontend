import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import useLoadingState from './hooks/useLoadingState';
import Auth from './pages/auth/Auth';
import Ecoturismo from './pages/ecoturismo/Ecoturismo';
import Activities from './pages/activities/Activities';
import About from './pages/about/About';
import Home from './pages/home/Home';

function App() {
  const { loading } = useLoadingState();
  return (
    <>
      {loading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/ecoturismo" element={<Ecoturismo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
