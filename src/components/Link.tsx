import { AnchorHTMLAttributes } from "react";
import classes from "./Link.module.css";

function Link({
  href = "#",
  children = "Link",
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={`text-preset-7 ${classes["link"]}`}>
      {children}
    </a>
  );
}

export default Link;
