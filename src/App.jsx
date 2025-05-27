import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Loading from './components/loading/Loading';
import Auth from './pages/auth/Auth';
import Ecoturismo from './pages/ecoturismo/Ecoturismo';
import Activities from './pages/activities/Activities';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Activity from './pages/activity/Activity';
import Accommodations from './pages/acommodations/Accommodations';
import Accommodation from './pages/acommodation/Accommodation';
import Profile from './pages/profile/Profile';
import Owner from './pages/owner/Owner';
import OwnerReservations from './pages/ownerReservation/OwnerReservation';
import RegisterActivity from './pages/registerActivity/RegisterActivity';
import RegisterAccommodation from './pages/registerAccommodation/RegisterAccommodation';
import UpdateActivity from './pages/updateActivity/UpdateActivity';
import UpdateAccommodation from './pages/updateAccommodation/UpdateAccommodation';
import FilterBooking from './pages/filterBooking/FilterBooking';
import useLoadingState from './hooks/useLoadingState';
import { useEffect } from 'react';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { loading } = useLoadingState();
  return (
    <>
      {loading && <Loading />}
      <Header />
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/ecoturismo" element={<Ecoturismo />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/about" element={<About />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity/:name/:id" element={<Activity />} />
        <Route path="/accommodation/:name/:id" element={<Accommodation />} />
        <Route path="/registerActivity" element={<RegisterActivity />} />
        <Route path="/registerAccommodation" element={<RegisterAccommodation />} />
        <Route path="/updateActivity/:id" element={<UpdateActivity />} />
        <Route path="/updateAccommodation/:id" element={<UpdateAccommodation />} />
        <Route path="/ownerReservations" element={<OwnerReservations />} />
        <Route path="/filterActivities" element={<FilterBooking />} />
        <Route path="/filterAccommodations" element={<FilterBooking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
