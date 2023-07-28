import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar.js"
import Feed from "./Feed"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="appBody">
          <Sidebar/>
           <Feed/>
           {/*widgets */}

      </div>
     
    </div>
  );
}

export default App;
