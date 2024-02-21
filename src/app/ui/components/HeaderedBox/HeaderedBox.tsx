import { ReactNode } from "react";
import "./HeaderedBox.css";

type HeaderedBoxProps = {
  headerTitle?: string;
  children: ReactNode;
  boxClassName?: string;
  boxHeaderClassName?: string;
  headerTitleClassName?: string;
};

export default function HeaderedBox({
  headerTitle,
  children,
  boxClassName,
  boxHeaderClassName,
  headerTitleClassName,
}: HeaderedBoxProps) {
  return (
    <section className={`headered_box ${boxClassName}`}>
      <header className={`headered_box__header ${boxHeaderClassName}`}>
        <h1 className={`header__title ${headerTitleClassName}`}>{headerTitle}</h1>
      </header>
      <div className="headered_box__content">{children}</div>
    </section>
  );
}
