import { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  headerTitle: string;
  children: ReactNode;
  cardClassName?: string;
  cardHeaderClassName?: string;
  headerTitleClassName?: string;
};

export default function Card({
  headerTitle,
  children,
  cardClassName,
  cardHeaderClassName,
  headerTitleClassName,
}: CardProps) {
  return (
    <section className={`card ${cardClassName}`}>
      <header className={`card__header ${cardHeaderClassName}`}>
        <h1 className={`header__title ${headerTitleClassName}`}>{headerTitle}</h1>
      </header>
      <div className="card__content">{children}</div>
    </section>
  );
}
