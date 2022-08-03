import { Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import { BlogPage } from "../Pages/BlogPage";
import { Login } from "../Pages/Login";
import { Loading } from "./Loading";

export function Router() {
  const navigate = useNavigate();
  const location = useLocation();

  location.pathname === '/' && setTimeout(() => navigate('/login'), 1000)

  return (
    <Routes>
      <Route path="/" element={ <Loading /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/blog" element={ <BlogPage /> } />
    </Routes>
  );
}
