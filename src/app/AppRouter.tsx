import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@pages/HomePage/HomePage.tsx"));
const ProjectDataPage = lazy(
    () => import("@pages/ProjectDataPage/ProjectDataPage")
);
const TasksPage = lazy(() => import("@pages/TasksPage/TasksPage"));
const FileUploadPage = lazy(
    () => import("@pages/FileUploadPage/FileUploadPage")
);
const ResourcesPage = lazy(() => import("@pages/ResourcesPage/ResourcesPage"));
const AbstractPage = lazy(() => import("@pages/AbstractPage/AbstractPage"));
const QuestionnairePage = lazy(
    () => import("@pages/QuestionnairePage/QuestionnairePage.tsx")
);
import ReturnButton from "@components/ReturnButton/ReturnButton";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner.tsx";

export function AppRouter() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
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
                    <Route
                        path=":projectId/resources/:taskId"
                        element={
                            <>
                                <ReturnButton />
                                <ResourcesPage />
                            </>
                        }
                    />
                    <Route
                        path=":projectId/abstract/:taskId"
                        element={
                            <>
                                <ReturnButton />
                                <AbstractPage />
                            </>
                        }
                    />
                    <Route
                        path={":projectId/questionnaire/:taskId"}
                        element={
                            <>
                                <ReturnButton />
                                <QuestionnairePage />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </Suspense>
    );
}
