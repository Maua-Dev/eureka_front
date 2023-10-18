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
      {/* <div className="popup">
        <div className="circle ">
          <div className="bubble">
            <h1>Nova entrega em: </h1>
            <ul>
              {newDeliveries?.map((delivery, index) => (
                <li key={index}>{delivery}</li>
              ))}
            </ul>
          </div>
        </div>
        <span>Novo!</span>
      </div> */}

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
    </Link>
  );
}
