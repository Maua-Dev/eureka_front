import { Route, Routes } from "react-router-dom";
import Home from "./view/pages/Home/Home";
import Project from "./view/pages/Project/Project";
import ProjectData from "./view/pages/ProjectData/ProjectData";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project">
        <Route path=":idProject" element={<Project />} />
        <Route path=":idProject/data/:idTask" element={<ProjectData />} />
      </Route>
    </Routes>
  );
}
