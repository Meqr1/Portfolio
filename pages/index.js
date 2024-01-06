// pages/index.js
import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';


const Page = () => {
  return (
      <div className="">
        <h1 className="text-xl font-bold underline mb-4">Meqr - Full-Stack Developer</h1>
      <p>
  Meqr, a dedicated <em>high school student</em> based in <strong>J&K</strong>, is passionately diving into the world of full-stack development. Proficient in <code>Python</code>, <code>JavaScript</code>, and <code>TypeScript</code>, Meqr demonstrates an insatiable curiosity for crafting innovative solutions that harmonize creativity with technical precision. Navigating both front-end and back-end development, Meqr embraces challenges, continually honing skills to create robust and efficient applications.
</p>
<br />
<p>
  Beyond the world of code, Meqr finds inspiration in the art of photography, capturing moments that reflect a unique perspective. This creative flair extends to the exploration of new technologies, where Meqr strives to stay at the forefront of industry trends. Currently without a specific project but fueled by a commitment to continuous learning, Meqr eagerly anticipates the next opportunity to contribute to the ever-evolving landscape of digital innovation.
</p>
<br />
<p>
  As a <em>high school student</em>, Meqr's academic journey is marked by a dedication to self-learning and exploration. The absence of a formal degree is overshadowed by a passion for technology and a drive to excel in the dynamic and creative realm of software development. In every endeavor, Meqr brings a harmonious blend of technical prowess, artistic sensibility, and a relentless commitment to personal and professional growth.
</p>


        <br />
        <br />

        <h3 className="text-xl font-bold underline mb-4">Timeline</h3>
        <div className="p-4 shadow shadow-black rounded">
          <p><b>2018</b> - Started programming</p>
          <p><b>2020</b> - first step towards Full-Stack development</p>
          <p><b>2021</b> - learned frameworks like <u>React, Next, Tailwindcss</u></p>
          <p><b>2022</b> - working as a freelancer</p>
        </div>

        <br />

        <h2 className="text-xl font-bold"><u>Follow me on</u></h2>
        <div className="ml-4">
          <Link className="flex items-center" href={"https://www.youtube.com/channel/UC8-ns1F3px56_LVj44athGw"}>
            <FaYoutube />
            <p className="ml-2">Youtube</p>
          </Link>

          <Link className="flex items-center" href={"https://www.instagram.com/ayan_johxn/"}>
            <AiFillInstagram />
            <p className="ml-2">Instagram</p>
          </Link>
          <Link className="flex items-center" href={"https://github.com/Meqr1"}>
            <FaGithub />
            <p className="ml-2">Github</p>
          </Link>
        </div>
        <br />

      <a className="flex justify-center" href="mailto:ayanmahajan41@gmail.com">
        Contact Me - <u>ayanmahajan41@gmail.com</u>
      </a>
      </div>
  );
};

export default Page;

