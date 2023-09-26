import { Link } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  image: string;
  title: string;
  teacherAdvisor: string;
}

export default function ProjectCard({
  image,
  title,
  teacherAdvisor,
}: ProjectCardProps) {
  return (
    <Link id="card" to={''}>
      <div
        style={{
          backgroundImage: `url(${image})`, backgroundSize: 'cover'
        }}
      />
      <aside>
        <h1>{title}</h1>
        <p>Prof.ª orientador: {teacherAdvisor}</p>
      </aside>
    </Link>
  );
}
