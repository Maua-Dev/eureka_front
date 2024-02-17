import "./DataCard.css";

type DataCardProps = {
  image: string;
  title: string;
  description: string;
  backgroundColor?: string;
  onClick?: () => void;
};

export default function DataCard({
  image,
  title,
  description,
  backgroundColor,
  onClick,
}: DataCardProps) {
  return (
    <div onClick={onClick} className="data_card" style={{ backgroundColor: backgroundColor }}>
      <img className="data_card__img" src={image} alt={`Imagem da ODS "${title}"`} />
      <h2 className="data_card__title">{title}</h2>
      <p className="data_card__description">{description}</p>
    </div>
  );
}
