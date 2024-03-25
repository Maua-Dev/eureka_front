import { ReactNode } from "react";
import "./HeaderedBox.css";

type HeaderedBoxProps = {
  headerTitle?: string;
  children: ReactNode;
  boxClassName?: string;
  boxHeaderClassName?: string;
  headerTitleClassName?: string;
  boxContentClassName?: string;
};

export default function HeaderedBox({
  headerTitle,
  children,
  boxClassName,
  boxHeaderClassName,
  headerTitleClassName,
  boxContentClassName,
}: HeaderedBoxProps) {
  return (
    <section className={`headered_box ${boxClassName}`}>
      <header className={`headered_box__header ${boxHeaderClassName}`}>
        <h1 className={`header__title ${headerTitleClassName}`}>{headerTitle}</h1>
      </header>
      <div className={`headered_box__content ${boxContentClassName}`}>{children}</div>
    </section>
  );
}
