import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectDataPage from "./pages/ProjectDataPage/ProjectDataPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";
import ReturnButton from "./ui/components/ReturnButton/ReturnButton";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project">
        <Route
          path=":projectId"
          element={
            <>
              <ReturnButton />
              <TasksPage />
            </>
          }
        />
        <Route
          path=":projectId/data/:taskId"
          element={
            <>
              <ReturnButton />
              <ProjectDataPage />
            </>
          }
        />
        <Route
          path=":projectId/upload/:taskId"
          element={
            <>
              <ReturnButton />
              <FileUploadPage />
            </>
          }
        />
      </Route>
    </Routes>
  );
}
