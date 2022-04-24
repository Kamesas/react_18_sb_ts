import React, { DetailedHTMLProps, FC } from "react";
import "./Button.scss";

export interface iButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "dark" | "light" | "red" | "outline";
  size?: "lg" | "md" | "sm";
  loading?: boolean;
  className?: string;
}

// TODO add loading animation

export const Button: FC<iButtonProps> = ({
  color = "",
  size = "",
  className = "",
  loading = false,
  children,
  ...props
}) => {
  const loadingClassName: string = loading ? "loading" : "";
  return (
    <button
      className={`Button ${size} ${color} ${loadingClassName} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
