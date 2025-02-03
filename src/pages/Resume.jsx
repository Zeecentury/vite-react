const Resume = () => {
  return (
    <div>
      <h1>Resume</h1>

      <section>
        <h2>Summary</h2>
        <p>
          I am a Junior Web Developer passionate about creating responsive and
          efficient web applications. Skilled in front-end and back-end
          technologies, with a strong interest in EdTech and innovative
          solutions.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          <h3>Junior Web Developer</h3>
          <p>Company Name - Year</p>
          <p>
            Developed and maintained web applications, collaborated with teams,
            and optimized performance.
          </p>
        </div>

        <div>
          <h3>Intern Web Developer</h3>
          <p>Company Name - Year</p>
          <p>
            Assisted in website development, debugging issues, and learning
            industry best practices.
          </p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div>
          <h3>Degree Name</h3>
          <p>University Name - Year</p>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>REST APIs, Database Management</li>
          <li>Version Control (Git)</li>
        </ul>
      </section>

      <section>
        <h2>Download Resume</h2>
        <a href="/resume.pdf" download>
          Download PDF
        </a>
      </section>
    </div>
  );
};

export default Resume;
