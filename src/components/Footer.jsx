import { FiGithub, FiMail } from "react-icons/fi";
import { githubUser } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href={`https://github.com/${githubUser}`}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a href="mailto:hakimifrozan0@gmail.com" aria-label="Email">
          <FiMail />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Frozan Hakimi. All rights reserved.</p>
      <p className="footer-sub">Built with React &amp; ❤️</p>
    </footer>
  );
}