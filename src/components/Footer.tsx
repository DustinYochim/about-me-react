import githubIconPath from "../images/github.svg";

export const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/DustinYochim">Created by Dustin Yochim </a>
      <img src={githubIconPath} alt="GitHub" className="github-icon" />
    </footer>
  );
};
