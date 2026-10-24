import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-card">
        {/* Left side: Image */}
        <div className="about-image-container">
          <img
            src="/images/profile.png"
            alt="Frozan Hakimi"
            className="about-photo"
          />
        </div>

        {/* Right side: Text */}
        <div className="about-text">
          <p>
            My name is <strong>Frozan Hakimi</strong>. I am interested in
            technology, web development and learning new skills. I enjoy creating
            websites that are simple, attractive and easy to use.
          </p>
          <p>
            I have experience working with HTML and CSS and I am also learning
            JavaScript to improve my programming skills. My goal is to become a
            skilled frontend developer and continue developing my knowledge in
            computer science.
          </p>
          <p>
            Alongside my passion for coding, I am currently studying English at{" "}
            <strong>Kabul University</strong>. This academic journey has not only
            strengthened my language and communication skills but has also taught
            me discipline, critical thinking, and how to approach complex
            challenges—all of which directly benefit my work in tech.
          </p>
          <p>
            I believe that learning programming is a continuous journey. Every
            project gives me an opportunity to learn something new, solve problems
            and improve my creativity. I am hardworking, curious and interested
            in challenging myself with new projects. In the future, I hope to work
            on meaningful technology projects and build useful digital
            experiences for people.
          </p>
        </div>
      </div>
    </section>
  );
}