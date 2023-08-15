import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
