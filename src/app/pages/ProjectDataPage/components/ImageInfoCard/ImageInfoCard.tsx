import "./ImageInfoCard.css";

type ImageInfoCardProps = {
  image: string;
  title: string;
  description: string;
  backgroundColor?: string;
  onClick?: () => void;
};

export default function ImageInfoCard({
  image,
  title,
  description,
  backgroundColor,
  onClick,
}: ImageInfoCardProps) {
  return (
    <section
      onClick={onClick}
      className="image_info_card"
      style={{ backgroundColor: backgroundColor }}
    >
      <img className="image_info_card__img" src={image} alt={`Imagem da ODS "${title}"`} />
      <h2 className="image_info_card__title">{title}</h2>
      <p className="image_info_card__description">{description}</p>
    </section>
  );
}
