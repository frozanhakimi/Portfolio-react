import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const [greet, setGreet] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">HELLO, I'M</p>
          <h1>
            Frozan <span className="gradient-text">Hakimi</span>
          </h1>
          <h2 className="role">Frontend Developer</h2>
          <p className="hero-desc">
            I'm a passionate learner and aspiring frontend developer who enjoys
            creating simple, beautiful and responsive websites.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setGreet(true)}>
              Say Hello <FiArrowRight />
            </button>
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="avatar-ring">
            <img
              src="/images/profile.jpg"
              alt="Frozan Hakimi"
              className="avatar-photo"
            />
          </div>
        </motion.div>
      </div>

      {greet && (
        <div className="modal-overlay" onClick={() => setGreet(false)}>
          <motion.div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3>👋 Hello!</h3>
            <p>Welcome to my portfolio — thanks for stopping by!</p>
            <button className="btn btn-primary" onClick={() => setGreet(false)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}