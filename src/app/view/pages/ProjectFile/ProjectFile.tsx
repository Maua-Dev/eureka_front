import { useParams } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import "./ProjectFile.css";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import { TaskContext } from "../../../context/task-context";

export default function ProjectFile() {
  // get the project id from the url to fetch the project data
  const { idProject } = useParams();
  const projectId = parseInt(idProject!);

  // get the task id from the url to fetch the project data
  const { idTask } = useParams();
  const taskid = parseInt(idTask!);

  const { tasksList } = useContext(TaskContext);
  const task = tasksList.find((task) => task.taskId === taskid)!;

  return (
    <main className="project_file">
      <ReturnButton to={`/project/${projectId}`} />
      <Card
        cardHeaderClassName="card__header--file"
        cardClassName="card--file"
        headerTitle={task.title}
      >
        <h1>Em construção...</h1>
      </Card>
    </main>
  );
}
