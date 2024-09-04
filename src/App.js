import './App.css';
import React from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';

//react router
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/room/:id" element={<RoomDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
