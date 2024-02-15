import { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  headerTitle: string;
  children: ReactNode;
  cardClassName?: string;
  headerTitleClassName?: string;
};

export default function Card({
  headerTitle,
  children,
  cardClassName,
  headerTitleClassName,
}: CardProps) {
  return (
    <section className={`card ${cardClassName}`}>
      <header className="card__header">
        <h1 className={`header__title ${headerTitleClassName}`}>{headerTitle}</h1>
      </header>
      {children}
    </section>
  );
}
