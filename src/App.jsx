import React from 'react';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design', 'CSS Animations', 'Git', 'GitHub', 'VS Code'];

function App() {
  return (
    <main className="github-page">
      <aside className="profile-sidebar">
        <div className="avatar-container">
          <img className="profile-avatar" src="/profile.jpg" alt="Gurpeet Singh" />
          <span className="avatar-status" title="Available">☺</span>
        </div>
        <h1 className="profile-name">Guri</h1>
        <p className="profile-username">iGurpeetSingh</p>
        <p className="profile-bio">Hello! My name is Guri. I am a passionate Web Developer specializing in HTML, CSS, JavaScript and React.js. I create modern, responsive, and animation-rich websites.</p>
        <a className="edit-profile" href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer">Edit profile</a>
        <div className="follow-info"><span>♟ 4 followers</span><span>·</span><span>4 following</span></div>
        <a className="sidebar-link" href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer"><span>↗</span> github.com/iGurpeetSingh</a>
        <a className="sidebar-link" href="https://coaching-test-preparation.vercel.app/" target="_blank" rel="noreferrer"><span>🔗</span> coaching-test-preparation.vercel.app</a>
      </aside>

      <section className="readme-card" aria-label="GitHub profile README">
        <div className="file-breadcrumb"><span>iGurpeetSingh</span> / README.md <span className="pencil">✎</span></div>
        <article className="readme-content">
          <h2>Hi there, I'm Gurpeet Singh <span className="wave">👋</span></h2>
          <hr />
          <h3>▱ Frontend Developer | Web Developer</h3>
          <p><strong>I'm Gurpeet Singh</strong>, a passionate Web Developer who loves building modern, responsive, and user-friendly websites and web applications.</p>
          <p>I enjoy turning ideas into real-world digital experiences through clean code, creative designs, and modern web technologies.</p>

          <h3 className="section-title">🚀 About Me</h3>
          <ul>
            <li>🔭 I'm currently working on modern web development projects.</li>
            <li>🌱 I'm continuously learning and improving my development skills.</li>
            <li>💻 I have knowledge of HTML, CSS, JavaScript, and React.js.</li>
            <li>🎨 I enjoy creating responsive and interactive user interfaces.</li>
            <li>⚡ I'm interested in Full Stack Development and modern technologies.</li>
            <li>👯 I'm open to collaborating on interesting web development projects.</li>
            <li>🤝 Always excited to learn new technologies and work with developers.</li>
          </ul>

          <h3 className="section-title">🛠️ Languages and Tools :</h3>
          <div className="language-tools" aria-label="Languages and tools">
            <img
              src="https://skillicons.dev/icons?i=html,css,js,react,git,github,vscode&theme=dark"
              alt="HTML, CSS, JavaScript, React, Git, GitHub and VS Code icons"
              loading="lazy"
            />
          </div>

          <h3 className="section-title">🎯 My Goals</h3>
          <ul>
            <li>Become a skilled Full Stack Developer.</li>
            <li>Build creative and impactful web applications.</li>
            <li>Contribute to open-source projects.</li>
            <li>Continuously improve my coding and problem-solving skills.</li>
          </ul>

          <h3 className="section-title">📫 Connect With Me</h3>
          <ul>
            <li><strong>GitHub:</strong> <a href="https://github.com/iGurpeetSingh" target="_blank" rel="noreferrer"> @iGurpeetSingh</a></li>
          </ul>
          <hr className="bottom-rule" />
          <p className="thanks">⭐ Thanks for visiting my profile! Feel free to explore my repositories and connect with me.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
