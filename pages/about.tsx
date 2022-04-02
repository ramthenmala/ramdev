import { NextPage } from 'next';
import React from 'react';
import Container from '../components/PageLayout/Container';

const AboutPage: NextPage = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <h2>Links</h2>
      <ul>
        <li>
          Twitter: <a href="https://twitter.com/ramthenmala">@ramthenmala</a>
        </li>
        <li>
          GitHub:
          <a href="https://github.com/ramthenmala">@ramthenmala</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/ramdevengineer/">
            ramdevengineer
          </a>
        </li>
        <li>
          Instagram:
          <a href="https://www.instagram.com/ramthenmala/">@ramthenmala</a>
        </li>
      </ul>
      <h2>Bio</h2>
      <h3>Job Title</h3>
      <p>Lee Robinson, Director of Developer Relations at Vercel</p>

      <h3>Long, 3rd Person</h3>
      <p>
        Lee Robinson is the Director of Developer Relations at{' '}
        <a href="http://vercel.com/">Vercel</a>, where he helps developers build
        a faster web and leads the Next.js community. Prior to that, Lee was a
        Senior Software Engineer focused on the frontend. An educator, writer,
        and speaker, Lee has also created extensive courses on React and
        Next.js.
      </p>

      <h3>Short, 3rd Person</h3>
      <p>
        Lee Robinson is the Director of Developer Relations at{' '}
        <a href="http://vercel.com/">Vercel</a>, where he helps developers build
        a faster web.
      </p>

      <h2>Headshots</h2>
      <div className="flex space-x-8">img1</div>
    </Container>
  );
};

export default AboutPage;
