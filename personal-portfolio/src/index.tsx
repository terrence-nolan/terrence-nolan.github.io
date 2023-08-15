import React from 'react';
import './index.css';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;