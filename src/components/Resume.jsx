import React from 'react';

const Resume = () => (
    <section className='center'>
      <h2>Resume</h2>
      <a href="/docs/resume.pdf" download>Download my Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>TypeScript</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );


export default Resume;