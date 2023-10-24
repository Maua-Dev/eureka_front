import { Link } from "react-router-dom";
import "./ProjectCard.css";

interface ProjectCardProps {
  image: string;
  title: string;
  teacherAdvisor: string;
  newDeliveries?: string[];
}

export default function ProjectCard({
  image,
  title,
  teacherAdvisor,
  newDeliveries,
}: ProjectCardProps) {
  return (
    <Link id="card" to={"/project"}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      />
      <aside>
        <h1>{title}</h1>
        <p>Prof.ª orientador: {teacherAdvisor}</p>
      </aside>
      {newDeliveries != null ? <div className="circle"></div> : null}
      {newDeliveries != null ?
        <div className="deliveries">
          <h1>Nova entrega em:</h1>
          {newDeliveries.map((delivery, index) => (
            <div key={index} className="delivery">
              <span >{delivery}</span>
            </div>
          ))}
        </div>
        : null}
    </Link>
  );
}
