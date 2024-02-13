import { useParams } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import "./ProjectData.css";

export default function ProjectData() {
    const { id } = useParams();
    const projectId = parseInt(id!);

    return (
        <main className="project_data">
            <ReturnButton to={`/project/${projectId}`} />
        </main>
    );
}