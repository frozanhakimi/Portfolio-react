import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  const ref = useRef(null);
  // This detects when the user scrolls to the skills section
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, list], catIndex) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-grid">
              {list.map((s, i) => (
                <div key={s.name} className="skill-card">
                  <div className="skill-head">
                    <span>{s.name}</span>
                    <span className="skill-percent">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    {/* The animated bar */}
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${s.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeOut", 
                        delay: catIndex * 0.1 + i * 0.1 // Stagger effect
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}