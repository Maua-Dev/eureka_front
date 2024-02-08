import React, { ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DialogProps {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
    to?: string;
    className: string;
}

/* this component is used to encopass dialogs that close when click outside */

export default function Dialog({ setOpen, children, to, className }: DialogProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        document.addEventListener("click", (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen && setOpen(false);
            }
        });
    }, []);

    return (
        <Link className={className} ref={ref} to={to ?? ""} onClick={(event) => event.preventDefault()}>
            {children}
        </Link >
    );
}