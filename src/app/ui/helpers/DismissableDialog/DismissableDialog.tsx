import { ReactNode, useEffect, useRef } from "react";

interface DismissableDialogProps {
  setOpen?: (state: boolean) => void;
  children: ReactNode;
  dialogClassName: string;
}

// component is used to encopass dialogs that close when click outside
export default function DismissableDialog({
  setOpen,
  children,
  dialogClassName,
}: DismissableDialogProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen && setOpen(false);
      }
    });
  }, []);

  return (
    <div className={dialogClassName} ref={ref} onClick={(event) => event.preventDefault()}>
      {children}
    </div>
  );
}
