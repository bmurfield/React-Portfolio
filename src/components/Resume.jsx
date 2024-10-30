import React from "react";

const Resume = () => (
  <section className="center">
    <h2>Resume</h2>
    <a href="/docs/resume.pdf" download>
      Download my Resume
    </a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>TypeScript</li>
      {/* I will add more skills here as I leanr them */}
    </ul>
  </section>
);

export default Resume;
