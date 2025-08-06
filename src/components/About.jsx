import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I’m a fresh Frontend Developer with a good understanding of HTML, CSS,
          JavaScript, React.js, and version control using Git and GitHub. I
          enjoy building clean and responsive websites, and I’m always looking
          to improve my skills.
        </p>

        <br />

        <p className="text-xl">
          I love coding from scratch and enjoy turning ideas into real, working
          web pages. I'm passionate about learning how to create better user
          experiences through design and development.
          <br /> <br />
          I value simple, minimalistic design and believe in creating websites
          that are easy to use and connect well with users. I'm excited to
          collaborate with others and keep growing in this field.
          <br /> <br />
          Lately, I’ve been working on small projects to gain hands-on
          experience and learn how to create better user interfaces. My goal is
          to join a team where I can grow as a developer, learn from others, and
          contribute to real-world web projects.
        </p>
      </div>
    </div>
  );
};

export default About;
