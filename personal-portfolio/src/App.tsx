import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <p>This is the body of the app</p>
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Terrence Nolan</p>
      </footer>
    </div>
  );
}

export default App;
