import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import PrivateRoute from "./components/PrivateRoute";

//Pages
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Licensing from "./pages/Licensing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login"    element={<Login />}/>
        <Route path="/"               element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/Profile"    element={<PrivateRoute><Layout /></PrivateRoute>}/>
          <Route path="/Licensing"    element={<PrivateRoute><Licensing /></PrivateRoute>}/>
          <Route path="/Vechicle"     element={<PrivateRoute><Layout /></PrivateRoute>}/>
          <Route path="/Transactions" element={<PrivateRoute><Layout /></PrivateRoute>}/>
          <Route path="/Documents"    element={<PrivateRoute><Layout /></PrivateRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
