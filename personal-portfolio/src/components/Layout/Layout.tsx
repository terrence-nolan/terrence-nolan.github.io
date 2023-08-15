// src/components/Layout.tsx
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { LayoutRouteProps } from 'react-router-dom';

const Layout: React.FC<LayoutRouteProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
