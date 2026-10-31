import "../App.css";
import {
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiPenTool,
} from "react-icons/fi";
import { contact } from "../data.js";
import { NavLink } from "react-router-dom";

const resumeLink = contact.find((item) => item.alt === "Resume").path;

const Home = () => {
  return (
    <div className="home-page reveal">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">01 / Full-stack developer</div>
          <h1 className="display">
            I build the <span className="text-lime">thinking layer</span> of the
            web.
          </h1>
          <p className="hero-intro">
            Hey, I’m Dhruv. A full-stack developer turning thoughtful product
            ideas into fast, intelligent, and reliable digital experiences.
          </p>
          <div className="button-row">
            <NavLink to="/projects" className="button-primary">
              Explore selected work <FiArrowUpRight />
            </NavLink>
            <a
              href={resumeLink}
              className="button-ghost"
              target="_blank"
              rel="noreferrer"
            >
              View resume <FiFileText />
            </a>
            <a href="mailto:dhruvhgoradia@gmail.com" className="button-ghost">
              Start a conversation
            </a>
          </div>
          <div className="social-row">
            <a
              href="https://github.com/Dhruv13g45"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-goradia-3111102a6/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://hashnode.com/@dhruv134507"
              target="_blank"
              rel="noreferrer"
            >
              <FiPenTool /> Hashnode
            </a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="orbit-card">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">
              DG<span>.</span>
            </div>
          </div>
          <div className="hero-note">
            <span className="accent">●</span> Currently exploring: LLM
            orchestration, agentic workflows & product engineering.
          </div>
        </div>
      </section>
      <section className="proof-strip">
        <span className="section-label">What I bring</span>
        <span>Frontend craft</span>
        <span>Backend systems</span>
        <span>GenAI integrations</span>
        <span>Clear technical writing</span>
      </section>
    </div>
  );
};

export default Home;
