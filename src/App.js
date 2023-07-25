import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="appBody">
          <Sidebar/>
             {/* feed 
             widgets */}

      </div>
     
    </div>
  );
}

export default App;
