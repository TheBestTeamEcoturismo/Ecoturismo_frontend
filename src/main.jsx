import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './providers/users/UsersProvider.jsx';
import ReservationsProvider from './providers/reservations/Reservations.jsx';
import ActivitiesProvider from './Providers/Activities/ActivitiesProvider.jsx';
import AccommodationsProvider from './providers/accommodations/AccommodationsProvider.jsx';

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
