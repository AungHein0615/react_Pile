import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./component/Home"


import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './component/Details';
import InnerDetails from './component/InnerDetails';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/innerId/:id" element={<InnerDetails />}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
