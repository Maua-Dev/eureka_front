import { useParams } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Card from "../../components/Card/Card";
import { ProjectModel } from "../../../models/project-model";
import { useContext, useEffect, useState } from "react";
import { handleFetch } from "../../../utils/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import { ProjectContext } from "../../../context/project-context";
import isEqual from "lodash.isequal";
import "./ProjectData.css";

export default function ProjectData() {
    const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);

    const { id } = useParams();
    const projectId = parseInt(id!);

    const { project, getProject } = useContext(ProjectContext);
    const { showBoundary } = useErrorBoundary();

    useEffect(() => {
        if (isEqual(project, ProjectModel.empty())) {
            handleFetch(setIsSkeletonLoading, showBoundary, getProject(projectId));
        }
    }, []);

    return (
        <main className="project_data">
            <ReturnButton to={`/project/${projectId}`} />
            <Card headerTitle={project.title} >
                <h1> TESTE </h1>
            </Card>
        </main>
    );
}