import { useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { githubUser } from "../data";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
        >
          Frozan<span>.</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                goTo(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          {/* New Social Icons in Navbar */}
          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="nav-social-icon"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="mailto:hakimifrozan0@gmail.com"
            className="nav-social-icon"
            aria-label="Email"
          >
            <FiMail />
          </a>
          
          <div className="divider"></div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
          
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}