import React, { useEffect } from 'react';
import AppRoutes from './routes/Approutes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);

  return <AppRoutes />;
}

export default App;