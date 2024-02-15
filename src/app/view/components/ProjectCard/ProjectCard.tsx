import { Link } from "react-router-dom";
import "./ProjectCard.css";
import "react-loading-skeleton/dist/skeleton.css";

type ProjectCardProps = {
  image: string;
  title: string;
  advisor: string;
  newDeliveries?: string[];
  projectId: number;
};

export default function ProjectCard({
  image,
  title,
  advisor,
  newDeliveries,
  projectId,
}: ProjectCardProps) {
  const hasNewDeliveries = newDeliveries != null;

  return (
    <Link className="project_card project_card--hover" to={`/project/${projectId}`}>
      <div
        className="project_card__img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      />
      <aside className="infos">
        <h1 className="infos__title">{title}</h1>
        <p className="infos__teacher">Prof. orientador: {advisor}</p>
      </aside>
      {hasNewDeliveries && <div className="circle"></div>}
      {hasNewDeliveries && (
        <div className="deliveries">
          <h1 className="deliveries__text">Nova entrega em:</h1>
          {newDeliveries.map(
            (delivery, index) =>
              index <= 3 && (
                <div key={index} className="delivery">
                  <span className="deliveries__text deliveries__text--lighter">{delivery}</span>
                </div>
              )
          )}
          {newDeliveries.length > 4 && (
            <span className="deliveries__text deliveries__text--lighter">...</span>
          )}
        </div>
      )}
    </Link>
  );
}
