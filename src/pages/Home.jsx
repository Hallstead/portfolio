import React from "react";
import BioCard from "../components/BioCard";
import SkillsGallery from "../components/SkillsGallery";
import portrait from "../assets/Hill_Jordon_1224.jpg";

const bioData = {
  name: "Jordon Hill",
  title: "Programming Professor | Software Engineer",
  picture: portrait,
  bio: `
      <p>
        I have a Bachelor of Science in Software Engineering and have developed multiple professional skills—cross-functional teamwork, project management, software development, and defect-free programming. I consistently meet deadlines and translate complex information into lay terms.
      </p>
      A few of my credentials include:
      <ul>
        <li>The ability to contribute to complex high-level projects, providing software solutions in various environments.</li>
        <li>Broad technical acumen and troubleshooting skills.</li>
        <li>A positive demeanor to contribute to productive working environments.</li>
      </ul>
      <p>
        I possess a strong work ethic, continually learn up-and-coming technologies quickly, and can easily adapt to new environments.
      </p>
    `,
};

const Home = () => {
  return (
    <>
      <BioCard
        name={bioData.name}
        title={bioData.title}
        picture={bioData.picture}
        bio={bioData.bio}
      />
      <SkillsGallery skills={bioData.skills} />
    </>
  );
};

export default Home;
