import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Layout />}/>
          <Route path="patient" element={<Layout />}/>
          <Route path="doctor" element={<Layout />}/>
          <Route path="nurse" element={<Layout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
