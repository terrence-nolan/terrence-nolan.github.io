import React from 'react';
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Terrence Nolan</h1>
      </header>
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
