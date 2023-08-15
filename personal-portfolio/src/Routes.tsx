import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import About from './pages/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Photos from './pages/PhotosPage/PhotosPage';
import Art from './pages/ArtPage/ArtPage'

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/art" element={<Art />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRoutes;
