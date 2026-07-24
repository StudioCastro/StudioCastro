export default function LogoMark({ solid = "#172554", className = "" }) {
  return (
    <span
      className={`inline-flex items-baseline font-extrabold tracking-tighter leading-none ${className}`}
    >
      <span className="bg-gradient-to-b from-sky-400 to-blue-600 bg-clip-text text-transparent">
        &lt;/
      </span>
      <span style={{ color: solid }}>C</span>
      <span className="bg-gradient-to-b from-sky-400 to-blue-600 bg-clip-text text-transparent">
        S
      </span>
      <span className="bg-gradient-to-b from-sky-400 to-blue-600 bg-clip-text text-transparent">
        &gt;
      </span>
    </span>
  );
}
