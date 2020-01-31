import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './router/router'
import RouterView from './router/routerView'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <RouterView routerlist={Router}></RouterView>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
