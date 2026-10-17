import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}