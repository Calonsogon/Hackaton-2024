// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import FormPage from './pages/formPage/FormPage';
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import FormPage from './pages/FormPage';
import MapPage from './pages/MapPage';
>>>>>>> 0f5a93e0273562b3855efced8d571864ce979c3b

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/form" element={<FormPage />} />
            <Route path="/map" element={<MapPage />} />
            </Routes>
        
        </main>
      </div>

    </Router>
  );
}

export default App;
