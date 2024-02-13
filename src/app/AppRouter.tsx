import { Route, Routes } from "react-router-dom";
import Home from "./view/pages/Home/Home";
import Project from "./view/pages/Project/Project";
import ProjectData from "./view/pages/ProjectData/ProjectData";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" >
        <Route path=":id" element={<Project />} />
        <Route path=":id/data" element={<ProjectData />} />
      </Route>
    </Routes>
  );
}
