// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { LayoutRouteProps } from 'react-router-dom';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }): JSX.Element => {
    return (
        <div>
            <Header pageTitle={pageTitle} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
