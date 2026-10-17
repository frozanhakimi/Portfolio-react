import { motion } from "framer-motion";
import { projects } from "../data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {p.featured && <span className="project-featured">⭐ Featured</span>}

            {/* Fake Browser Window for visual appeal */}
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dot red"></div>
                <div className="browser-dot yellow"></div>
                <div className="browser-dot green"></div>
              </div>
              <div className="browser-content">
                {p.icon}
              </div>
            </div>

            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="project-actions">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="project-btn project-btn-primary">
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="project-btn project-btn-ghost">
                  <FiGithub /> Source Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}