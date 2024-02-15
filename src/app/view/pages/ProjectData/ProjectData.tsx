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
  // get the project id from the url to fetch the project data
  const { id } = useParams();
  const projectId = parseInt(id!);

  const { project, getProject } = useContext(ProjectContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isEqual(project, ProjectModel.empty())) {
      handleFetch(setIsSkeletonLoading, showBoundary, getProject(projectId));
    }
  }, []);

  return (
    <main className="project_data">
      <ReturnButton to={`/project/${projectId}`} />
      {isSkeletonLoading ? (
        <Card headerTitle={project.title}>
          <h1> TESTE </h1>
        </Card>
      ) : null}
    </main>
  );
}
