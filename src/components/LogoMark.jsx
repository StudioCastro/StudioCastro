import logo from "../images/logo.png";

export default function LogoMark({ className = "" }) {
  return (
    <img
      src={logo}
      alt="Castro Studio"
      className={`rounded-full ${className}`}
      draggable={false}
    />
  );
}
