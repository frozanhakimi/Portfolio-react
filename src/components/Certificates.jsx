import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiX, FiExternalLink } from "react-icons/fi";
import { certificates } from "../data";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Certificates
      </motion.h2>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <motion.article
            key={cert.title}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(cert)}
          >
            <div className="cert-image-wrapper">
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
                loading="lazy"
              />
              <div className="cert-overlay">
                <FiExternalLink />
                <span>View</span>
              </div>
            </div>

            <div className="cert-body">
              <div className="cert-badge">
                <FiAward />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <p className="cert-desc">{cert.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <FiX />
              </button>

              <img
                src={selected.image}
                alt={selected.title}
                className="cert-modal-image"
              />

              <div className="cert-modal-body">
                <h3>{selected.title}</h3>
                <p className="cert-issuer">
                  {selected.issuer} · {selected.date}
                </p>
                <p className="cert-desc">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}