import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Layout from "./pages/Layout";
import Login from "./pages/Login";

// Custom Hooks
import useUserInfo from "./components/hooks/useUserInfo";

function App() {
  const { userInfo, setUserInfo } = useUserInfo();
  if(!userInfo) 
    return (<Login setUser={setUserInfo} />)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout email={userInfo.email} />}>
          <Route index element={<Layout email={userInfo.email} />}/>
          <Route path="patient" element={<Layout email={userInfo.email} />}/>
          <Route path="doctor" element={<Layout email={userInfo.email} />}/>
          <Route path="nurse" element={<Layout email={userInfo.email} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
