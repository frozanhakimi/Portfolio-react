import { motion } from "framer-motion";
import { FiMail, FiGithub } from "react-icons/fi";
import { githubUser } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
          If you would like to contact me, feel free to send me an email or
          visit my GitHub profile. I'm always open to learning and collaborating!
        </p>

        <div className="contact-links">
          <a href="mailto:hakimifrozan0@gmail.com" className="contact-item">
            <FiMail />
            <span>hakimifrozan0@gmail.com</span>
          </a>
          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FiGithub />
            <span>github.com/{githubUser}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}