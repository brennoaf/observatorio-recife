import { ReactNode, useEffect, useRef } from "react";

const FocusHidden = ({
  children,
  style="",
  setOpen,
}: {
  children: ReactNode;
  style?: string;
  open: boolean;
  setOpen: any;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    // Verifica se o clique foi fora do container do dropdown
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setOpen(false); // Fecha o dropdown
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <span ref={containerRef} className={style}>
      {children}
    </span>
  );
};

export default FocusHidden;
