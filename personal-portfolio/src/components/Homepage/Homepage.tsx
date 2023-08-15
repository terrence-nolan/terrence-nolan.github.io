import React from 'react';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Homepage = (): JSX.Element => {
  return (
    <main className="app-main">
      <Header />
      <div className="app-body">
        <p>This is the body of the app</p>
      </div>
      <Footer />
    </main>
  );
}

export default Homepage;
