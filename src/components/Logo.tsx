import logoDark from "/logo-dark.svg";
import logoLight from "/logo-light.svg";

interface LogoProps {
  logo?: "dark" | "light";
}

function Logo({ logo = "dark" }: LogoProps) {
  return <img src={logo === "dark" ? logoDark : logoLight} alt="Logo" />;
}

export default Logo;
