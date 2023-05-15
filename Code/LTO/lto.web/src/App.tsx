import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Components
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"    element={<Login />}/>
        <Route path="/"         element={<PrivateRoute childComponent={<Layout />} />}>
          <Route path="/doctor" element={<PrivateRoute childComponent={<Layout />} />}/>
          <Route path="/nurse"  element={<PrivateRoute childComponent={<Layout />} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
