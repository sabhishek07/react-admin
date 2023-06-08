import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.js';
import Single from './pages/Single/Single.js';
import List from './pages/List/List.jsx';
import New from './pages/New/New.js';
import "./Style/dark.scss";


function App(props) {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>




  );
}

export default App;
