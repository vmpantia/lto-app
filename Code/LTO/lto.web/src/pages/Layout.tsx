import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        sessionStorage.clear();
        navigate("/login");
      }}>logout</button>
    </div>
  )
}

export default Layout