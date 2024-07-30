import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Homebtn  from './components/Homebtn';
import SynergiesManager from './components/SynergiesManager';
import './App.css';

function App() {
  return (
   <>
      <Homebtn/>
   <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <SynergiesManager />
      </div>
    </div>
   </>
  );
}

export default App;

