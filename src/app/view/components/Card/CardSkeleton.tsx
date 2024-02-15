import { ReactNode } from "react";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type CardSkeletonProps = {
  children: ReactNode;
  cardClassName?: string;
  headerTitleClassName?: string;
};

export default function CardSkeleton({
  children,
  cardClassName,
  headerTitleClassName,
}: CardSkeletonProps) {
  return (
    <section className={`card ${cardClassName}`}>
      <SkeletonTheme baseColor="var(--blue)" duration={2} highlightColor="var(--dark-blue)">
        <header className="card__header--skeleton">
          <Skeleton className={`header__title--skeleton ${headerTitleClassName}`} />
        </header>
      </SkeletonTheme>
      {children}
    </section>
  );
}
