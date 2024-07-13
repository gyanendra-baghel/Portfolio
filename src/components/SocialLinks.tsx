import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../assets/Icons";

const SocialLinks: React.FC = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/gyanendra-baghel" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/Gyan_Singh01" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://github.com/gyanendra-baghel" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://youtube.com/@LearningWithGyan" target="_blank">
          <YoutubeIcon height={50} width={50} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
