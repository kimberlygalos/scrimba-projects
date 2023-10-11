import React from 'react';

export default function Footer() {
  return (
    <footer>
      <a href="">
        <img className="footer-icon icon" src="./assets/discord.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/kimberly-galos-0b278b224/"
        target="_blank">
        <img
          className="footer-icon linkedin-icon icon"
          src="./assets/linkedin.png"
        />
      </a>
      <a href="https://github.com/kimberlygalos" target="_blank">
        <img className="footer-icon icon" src="./assets/github-sign.png" />
      </a>
      <p className="footer--description">Connect with me!</p>
    </footer>
  );
}
