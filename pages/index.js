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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute w-[100%] -translate-x-[230px]"><path fill="#000" fill-opacity="1" d="M0,128L30,112C60,96,120,64,180,53.3C240,43,300,53,360,85.3C420,117,480,171,540,181.3C600,192,660,160,720,144C780,128,840,128,900,138.7C960,149,1020,171,1080,197.3C1140,224,1200,256,1260,229.3C1320,203,1380,117,1410,74.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      <a className="absolute translate-y-[140px] translate-x-[130px] text-white" href="mailto:ayanmahajan41@gmail.com">
        Contact Me - <u>ayanmahajan41@gmail.com</u>
      </a>
      </div>
  );
};

export default Page;

