import React, { ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DismissableDialogProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  to?: string;
  dialogClassName: string;
}

// component is used to encopass dialogs that close when click outside
export default function DismissableDialog({
  setOpen,
  children,
  to,
  dialogClassName,
}: DismissableDialogProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen && setOpen(false);
      }
    });
  }, []);

  return (
    <Link
      className={dialogClassName}
      ref={ref}
      to={to ?? ""}
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </Link>
  );
}
