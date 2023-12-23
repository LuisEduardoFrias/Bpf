import { CSSProperties, ReactElement } from "react";
//import "../styles/icon.css";

export default function Icon({
  children,
  className,
  style,
  id,
}: {
  children: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}): JSX.Element {
  const default_external_className = className ?? "icon_";
  
  return (
    <i
      className={`material-symbols-outlined __icon__ ${default_external_className}`}
      style={{
        ...style,
      }}
      id={id}
    >
      {children}
    </i>
  );
}
