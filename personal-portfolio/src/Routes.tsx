import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import AboutPage from './components/About/About';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" Component={HomePage} />
                <Route path="/about" Component={AboutPage} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
