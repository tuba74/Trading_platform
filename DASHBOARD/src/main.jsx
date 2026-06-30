import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import PrivateRoute from './components/PrivateRoute.jsx';
import Error from './components/Error.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Error" element={<Error state={err} />} /> */}
        
        <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);