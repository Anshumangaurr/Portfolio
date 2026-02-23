import React from 'react';
import ChatWidget from './components/ChatWidget';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary)' }}>AG.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <a href="#education" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a>
            <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
            <a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1>Anshuman Gaur</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Full Stack Developer & AI Enthusiast
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>VIT Vellore</p>
              <p style={{ fontSize: '0.8rem' }}>CS Undergraduate</p>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>CGPA 8.1</p>
              <p style={{ fontSize: '0.8rem' }}>Academic Excellence</p>
            </div>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 'bold' }}>Full Stack</p>
              <p style={{ fontSize: '0.8rem' }}>React, Node, Python</p>
            </div>
          </div>
          <a href="#projects" className="btn btn-primary">View My Work</a>
        </div>
      </section>

      <section id="about" className="container">
        <h2 className="section-title">About Me</h2>
        <div className="glass-card">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            I am a third-year Computer Science undergraduate at **VIT Vellore** with a strong foundation in full-stack development.
            My expertise spans across **React.js, Node.js, Python, Java, and SQL**.
            I have a proven track record of developing end-to-end web applications, REST APIs, and relational databases.
            Highly motivated and analytical, I am deeply interested in building scalable software systems and exploring the potential of **AI and Machine Learning**.
          </p>
        </div>
      </section>

      <section id="education" className="container">
        <h2 className="section-title">Education</h2>
        <div className="grid">
          <div className="glass-card">
            <h3 style={{ color: 'var(--primary)' }}>VIT Vellore</h3>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>B.Tech in Computer Science</p>
            <p style={{ color: 'var(--text-muted)' }}>July 2023 - Present</p>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>Current CGPA: 8.1</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--primary)' }}>Presidium Indirapuram</h3>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>Higher Secondary (Class XII)</p>
            <p style={{ color: 'var(--text-muted)' }}>April 2021 - April 2023</p>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>Score: 82%</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--primary)' }}>Presidium Indirapuram</h3>
            <p style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>High School (Class X)</p>
            <p style={{ color: 'var(--text-muted)' }}>April 2020 - April 2021</p>
            <p style={{ marginTop: '1rem', fontWeight: 600 }}>Score: 90%</p>
          </div>
        </div>
      </section>

      <section id="experience" className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>Web Development Intern</h3>
                <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>Excel Life Technologies</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>May 2025 – July 2025 | Noida, UP</p>
            </div>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>Integrated a real-time computerized solution for Inventory Management.</li>
              <li>Implemented and evaluated User Interface and database systems using React.js and SQL.</li>
              <li>Received certification and appreciation for automation of inventory processes.</li>
            </ul>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>Machine Learning Engineer</h3>
                <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>SmartTrail (Luggage Assistant Project)</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Jan 2025 – May 2025 | IEEE, VIT Vellore</p>
            </div>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>Implemented person detection and tracking using advanced computer vision (80-85% accuracy).</li>
              <li>Designed for autonomous navigation in high-traffic environments like airports and malls.</li>
              <li>Utilized Python, OpenCV, and Machine Learning for real-time processing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Key Projects</h2>
        <div className="grid">
          <a href="https://github.com/Anshumangaurr" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h3>Advanced Circuit UI</h3>
            <p style={{ color: 'var(--primary)', margin: '0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem' }}>Python, Flask, MySQL, JS</p>
            <p style={{ color: 'var(--text-muted)' }}>
              Developed a computerized inventory management system with full CRUD operations and efficient data handling.
            </p>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>View on GitHub →</p>
          </a>
          <a href="https://github.com/Anshumangaurr" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h3>EmotiCare AI</h3>
            <p style={{ color: 'var(--primary)', margin: '0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem' }}>Python, NLP, Sentiment Analysis</p>
            <p style={{ color: 'var(--text-muted)' }}>
              Built an emotion-aware chatbot that detects and responds to user emotions with empathetic responses (78% accuracy).
            </p>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>View on GitHub →</p>
          </a>
          <a href="https://github.com/Anshumangaurr" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <h3>Smart Trail Tracker</h3>
            <p style={{ color: 'var(--primary)', margin: '0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem' }}>Python, OpenCV, ML</p>
            <p style={{ color: 'var(--text-muted)' }}>
              Real-time person tracking system designed for autonomous navigation and security analytics.
            </p>
            <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>View on GitHub →</p>
          </a>
        </div>
      </section>

      <section id="skills" className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid">
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {['Python', 'Java', 'JavaScript', 'SQL'].map(s => (
                <span key={s} style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.9rem' }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Web / Backend</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {['React.js', 'Node.js', 'FastAPI', 'Flask', 'MySQL'].map(s => (
                <span key={s} style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.9rem' }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>AI & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {['OpenCV', 'NumPy', 'NLP', 'Git', 'VSCode'].map(s => (
                <span key={s} style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '2rem', fontSize: '0.9rem' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ marginBottom: '1rem' }}>anshumangaur204@gmail.com | Vellore, India</p>
        <p>&copy; 2026 Anshuman Gaur. Built with React, FastAPI & Gemini.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
