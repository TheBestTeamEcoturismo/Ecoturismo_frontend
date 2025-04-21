import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './providers/users/UsersProvider.jsx';
import ReservationsProvider from './providers/reservations/Reservations.jsx';
import AccommodationsProvider from './providers/accommodations/AccommodationsProvider.jsx';
import ActivitiesProvider from './providers/activities/ActivitiesProvider.jsx';

createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <UsersProvider>
      <ReservationsProvider>
        <AccommodationsProvider>
          <ActivitiesProvider>
            <App />
          </ActivitiesProvider>
        </AccommodationsProvider>
      </ReservationsProvider>
    </UsersProvider>
  </BrowserRouter>
);
