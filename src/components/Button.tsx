import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "black" | "orange" | "purple";
}

function Button({ color = "black", children }: ButtonProps) {
  return (
    <button className={`text-preset-7 ${classes[`button`]} ${classes[`button--${color}`]}`}>
      {children}
    </button>
  );
}

export default Button;
