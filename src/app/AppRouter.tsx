import { Route, Routes } from "react-router-dom";
import Home from "./view/pages/Home/Home";
import Project from "./view/pages/Project/Project";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />}/>
    </Routes>
  );
}
