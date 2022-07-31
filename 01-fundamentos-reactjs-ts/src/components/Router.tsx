import { Routes, Route } from "react-router-dom";
import { BlogPage } from "../Pages/BlogPage";
import { Login } from "../Pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/blog" element={ <BlogPage /> } />
    </Routes>
  );
}
