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

  const hasNewDeliveries = newDeliveries != null;

  return (
    <Link id="project_card" to={"/project"}>
      <div
        className="project_card__img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      />
      <aside className="infos">
        <h1 className="infos__title">{title}</h1>
        <p className="infos__teacher">Prof.ª orientador: {teacherAdvisor}</p>
      </aside>
      {hasNewDeliveries && <div className="circle"></div>}
      {hasNewDeliveries &&
        <div className="deliveries">
          <h1 className="deliveries__text">Nova entrega em:</h1>
          {newDeliveries.map((delivery, index) => (
            index <= 3 &&
            <div key={index} className="delivery">
              <span className="deliveries__text deliveries__text--lighter">{delivery}</span>
            </div>
          ))}
          {newDeliveries.length > 4 && <span className="deliveries__text deliveries__text--lighter">...</span>}
        </div>
      }
    </Link>
  );
}
