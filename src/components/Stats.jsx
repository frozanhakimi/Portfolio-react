import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "3", label: "Certificates Earned" },
    { number: "100%", label: "Passion for Code" },
    { number: "∞", label: "Eagerness to Learn" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, i) => (
        <motion.div 
          key={i} 
          className="stat-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="stat-number gradient-text">{stat.number}</h3>
          <p className="stat-label">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}