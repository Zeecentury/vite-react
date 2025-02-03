const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="content">
          <h1>Two Passions, One Purpose</h1>
          <p>
            Welcome! I’m Abdulafeez, a Software Engineer dedicated to building
            precise tech solutions and an EdTech advocate passionate about
            innovating in education. Join me as I merge these disciplines on my
            journey
          </p>
        </div>
      </section>

      <section className="skills">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Productivity Tools</h3>
            <ul>
              <li>Slack</li>
              <li>Jira</li>
              <li>ClickUp</li>
              <li>Microsoft Teams</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Hosting Platforms</h3>
            <ul>
              <li>Vercel</li>
              <li>Netlify</li>
              <li>Heroku</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Version Control</h3>
            <ul>
              <li>Github</li>
              <li>Gitlab</li>
              <li>Bitbucket</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Content Management Systems</h3>
            <ul>
              <li>Contentful</li>
              <li>DatoCMS</li>
              <li>Strapi</li>
              <li>Sanity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
