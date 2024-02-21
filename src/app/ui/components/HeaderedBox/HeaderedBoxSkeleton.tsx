import { ReactNode } from "react";
import "./HeaderedBox.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type HeaderedBoxSkeletonProps = {
  children: ReactNode;
  boxClassName?: string;
  headerTitleClassName?: string;
};

export default function HeaderedBoxSkeleton({
  children,
  boxClassName,
  headerTitleClassName,
}: HeaderedBoxSkeletonProps) {
  return (
    <section className={`headered_box ${boxClassName}`}>
      <SkeletonTheme baseColor="var(--blue)" duration={2} highlightColor="var(--dark-blue)">
        <header className="headered_box__header--skeleton">
          <Skeleton className={`header__title--skeleton ${headerTitleClassName}`} />
        </header>
      </SkeletonTheme>
      <div className="headered_box__content">{children}</div>
    </section>
  );
}
