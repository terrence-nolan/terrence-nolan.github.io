import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import ArtPage from './pages/ArtPage/ArtPage'

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout pageTitle="Terrence Nolan"><HomePage /></Layout>} />
                <Route path="/about" element={<Layout pageTitle="About Me"><AboutPage /></Layout>} />
                <Route path="/experience" element={<Layout pageTitle="Experience"><ExperiencePage /></Layout>} />
                <Route path="/projects" element={<Layout pageTitle="Projects"><ProjectsPage /></Layout>} />
                <Route path="/photos" element={<Layout pageTitle="Photos"><PhotosPage /></Layout>} />
                <Route path="/art" element={<Layout pageTitle="Art"><ArtPage /></Layout>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
