import { useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github,
  Instagram, Linkedin, Mail, Menu, X, Sparkles, Monitor, Layers3, Braces,
  ExternalLink, Send, MapPin
} from 'lucide-react';

const skills = [
  { name: 'HTML5', detail: 'Semantic structure', level: 'Core', icon: 'HTML' },
  { name: 'CSS3', detail: 'Responsive layouts & animation', level: 'Core', icon: 'CSS' },
  { name: 'JavaScript', detail: 'Interactive experiences', level: 'Learning', icon: 'JS' },
  { name: 'React.js', detail: 'Component-based UI', level: 'Learning', icon: '⚛' },
  { name: 'Git & GitHub', detail: 'Version control', level: 'Tools', icon: 'Git' },
  { name: 'Figma', detail: 'Design exploration', level: 'Tools', icon: 'F' }
];

const projects = [
  { number: '01', name: 'BASE WebApp', type: 'Web application', description: 'A clean web-based workspace focused on useful tools and a smooth user experience.', tags: ['React', 'JavaScript', 'CSS'], link: 'https://beta.base.software/' },
  { number: '02', name: 'Crypto Landing Pages', type: 'Frontend development', description: 'Modern landing page concepts for crypto and technology-focused products.', tags: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/iGurpeetSingh' },
  { number: '03', name: 'Web Experiments', type: 'Creative development', description: 'A growing collection of interface experiments, responsive layouts, and interactive ideas.', tags: ['React', 'CSS', 'UI'], link: 'https://github.com/iGurpeetSingh?tab=repositories' }
];

function SectionHeading({ index, eyebrow, title, accent }) {
  return <div className="section-heading"><span className="section-index">{index} / {eyebrow}</span><h2>{title} <span>{accent}</span></h2></div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="background-grid" aria-hidden="true" />
      <header className="header">
        <a className="logo" href="#home" onClick={closeMenu}><span className="logo-icon">G</span><span>gurpeet<span className="accent">.</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability"><span className="pulse" /> OPEN TO LEARNING & COLLABORATION</div>
            <p className="hero-overline">HELLO, I'M</p>
            <h1>Gurpeet<br /><span className="gradient-text">Singh.</span></h1>
            <h2>Frontend Developer <i>/</i> Web Creator</h2>
            <p className="hero-description">I create modern, responsive, and user-friendly digital experiences. I enjoy turning ideas into clean interfaces with thoughtful design and code.</p>
            <div className="hero-buttons"><a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="btn btn-secondary" href="#contact">Get in touch <ArrowDownRight size={17} /></a></div>
            <div className="social-line"><a href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a><span /> <a href="mailto:hello@example.com"><Mail size={16} /> EMAIL</a></div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-top"><span>PROFILE / 001</span><span className="online"><i /> ONLINE</span></div>
              <div className="avatar-wrap"><img src="https://avatars.githubusercontent.com/u/177917278?v=4" alt="Gurpeet Singh GitHub avatar" /><div className="avatar-glow" /></div>
              <div className="card-bottom"><div><strong>Gurpeet Singh</strong><small>Frontend Developer</small></div><span className="card-arrow"><ArrowUpRight /></span></div>
            </div>
            <div className="float-tag tag-top"><Code2 size={16} /> HTML · CSS · JS</div>
            <div className="float-tag tag-bottom"><Sparkles size={16} /> Building ideas</div>
            <div className="hero-decoration">GS<span>®</span></div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </section>

        <section className="section container" id="about">
          <SectionHeading index="01" eyebrow="ABOUT ME" title="A little about" accent="myself." />
          <div className="about-grid">
            <h3>Curious mind.<br /><span>Creative code.</span></h3>
            <div className="about-copy"><p>I'm Gurpeet Singh, a web developer who enjoys building modern websites and intuitive web applications. I care about the details — from responsive layouts to the small interactions that make a product feel polished.</p><p>I'm currently focused on growing my skills in HTML, CSS, JavaScript, and React.js, while exploring the wider world of full-stack development.</p><a className="inline-link" href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="stats"><div><strong>04<span>+</span></strong><small>CORE TECHNOLOGIES</small></div><div><strong>∞</strong><small>IDEAS TO EXPLORE</small></div><div><strong>100<span>%</span></strong><small>DRIVEN TO LEARN</small></div></div>
        </section>

        <section className="section skills-section" id="skills"><div className="container">
          <SectionHeading index="02" eyebrow="MY TOOLKIT" title="Skills &" accent="technologies." />
          <p className="section-intro">The tools I use to bring ideas to life — and the ones I'm exploring next.</p>
          <div className="skills-grid">{skills.map((skill, i) => <article className="skill-card" key={skill.name}><div className="skill-top"><span className="skill-icon">{skill.icon}</span><span className="skill-number">0{i + 1}</span></div><h3>{skill.name}</h3><p>{skill.detail}</p><span className="skill-level">{skill.level}</span></article>)}</div>
        </div></section>

        <section className="section container" id="projects">
          <SectionHeading index="03" eyebrow="SELECTED WORK" title="Things I've" accent="worked on." />
          <p className="section-intro">A few projects and experiments. More work is available on my GitHub profile.</p>
          <div className="projects-list">{projects.map(project => <article className="project-row" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name}><ArrowUpRight /></a></article>)}</div>
          <a className="all-projects" href="https://github.com/iGurpeetSingh?tab=repositories" target="_blank" rel="noreferrer">View all repositories <ArrowUpRight size={16} /></a>
        </section>

        <section className="contact-section" id="contact"><div className="container contact-inner">
          <span className="section-index">04 / GET IN TOUCH</span><h2>Have an idea?<br /><span>Let's build it.</span></h2><p>I'm always interested in learning, collaborating, and working on meaningful projects.</p>
          <a className="btn btn-primary contact-button" href="mailto:hello@example.com">Say hello <Send size={16} /></a>
          <div className="contact-meta"><span><MapPin size={15} /> India</span><a href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="mailto:hello@example.com"><Mail size={15} /> Email</a></div>
        </div></section>
      </main>
      <footer className="footer container"><a className="logo" href="#home"><span className="logo-icon">G</span><span>gurpeet<span className="accent">.</span></span></a><span>Designed & built by Gurpeet Singh © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  );
}