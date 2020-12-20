import React, { useEffect, useState } from "react";
import Head from 'next/head'
import classNames from "classnames";
import Particles from "../components/Particles";

const LinkToSection = ({ title, href, children }) => (
  <a href={`#${href}`} className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group">
    <span className="group-hover:text-fuchsia-300 text-accent uppercase font-mono">{title}</span><br/>
    <p className="group-hover:text-blueGray-300 text-blueGray-400">{children}</p>
  </a>
);

const containerClasses = "py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto";
const lastContainerClasses = "pt-12 lg:pt-16 xl:pt-24 2xl:pt-32 pb-6 md:pb-12 lg:pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto";

const SectionTitle = ({ accentText, title }) => (
  <>
    <span className="text-xl xl:text-2xl text-accent font-mono">{accentText}</span>
    <div className="lg:h-4"/>
    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">{title}<span className="text-accent">.</span></h1>
    <div className="h-6 md:h-8 lg:h-12 xl:h-16" />
  </>
);

const LinkCard = ({ title, link, children }) => (
  <div className="sm:max-w-sm w-full mr-6 mb-6 lg:mr-12 lg:mb-12">
    <a href={link} target="_blank" className="block border border-blueGray-800 hover:border-accent hover:bg-blueGray-800 group p-6">
      <h2 className="text-accent font-mono text-xl mb-4 group-hover:text-fuchsia-200">{title}</h2>
      <p className="text-blueGray-400 group-hover:text-blueGray-200">{children}</p>
    </a>
  </div>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="bg-blueGray-900">
      <Head>
        <title>Nathan Wang (thecodingwizard)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center relative">
        {isMobile !== undefined ?
          <Particles
            canvasClassName="block bg-blueGray-900"
            className={classNames("absolute inset-0")}
            isMobile={isMobile} /> : null}
        <div className={classNames(containerClasses, "z-10")}>
          <SectionTitle accentText="Hi there! I'm" title="Aditya Singh" />
          <div className="h-4 sm:h-0"/>
          <div className="text-body-container">
            <LinkToSection title="About Me" href="about">
              I love programming, especially competitive programming and mobile development.
              I also play a lot of board games chess.
            </LinkToSection>
            <LinkToSection title="Projects" href="projects">
              Created a lot of projects based on Flutter and currently working on my Competative Programming Skills
            </LinkToSection>
            <LinkToSection title="Achievements" href="achievements">
              I'm a 4★ coder at CodeChef. 
            </LinkToSection>
            <LinkToSection title="Education" href="education">
              I'm currently a student at Indraprastha Institute of Information Technology Delhi, where I'm part of Computer Science and Biosciences branch.
            </LinkToSection>
          </div>
          <div className="h-6 md:h-8 xl:h-16" />
          <div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
            <a className="link" href="singh.aditya44@gmail.com" target="_blank">Email</a> · <a className="link" href="https://github.com/c9addy" target="_blank">Github</a> · <a className="link" href="https://www.linkedin.com/in/aditya-singh-ba71a2116/" target="_blank">Linkedin</a>
          </div>
        </div>
      </div>

      <div className={containerClasses} id="about">
        <SectionTitle accentText="01" title="About Me" />
        <div className="text-body-container">
          <p>
            Ever since I embarked on my programming journey as a young child, I've been entranced by the power and flexibility of code.
          </p>
          <p>
            Today, I'm an avid competitive programmer and mobile developer. Programming is my superpower: With it, what I can create is limited only by my imagination!
          </p>
          <p>
            Outside of programming, I play a lot of board games, especially chess. I also enjoy playing CSGO with my friends!
          </p>
          <p>
            I strive to bring energy, technical knowledge, and a strong desire to learn with me wherever I go.
          </p>
        </div>
      </div>

      <div className={containerClasses} id="projects">
        <SectionTitle accentText="02" title="Projects" />
        <div className="text-body-container">
          <p>
            I'm always working on something new. Below are a few of my favorite projects!
          </p>
        </div>
        <div className="h-8 lg:h-12"/>
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="Automatic SRA Data Processing" link="https://sites.google.com/iiitd.ac.in/sraautomation/home">
          Our pipeline allows a user to automate the downloading and processing of SRA data on their configured HPC using a mobile app.
          </LinkCard>
          <LinkCard title="Patent-Office" link="https://github.com/c9addy/patent-office">
          PatentDB is a DBMS for a patent office having multiple branches across different cities.
          The database caters to the operational needs of the patent office, such as office records, registered attorneys, employee and officer records, application records, as well as royalty agreement records.
          </LinkCard>
          <LinkCard title="Competitive Programming" link="https://github.com/c9addy/Competitive-Programming/">
            This Github repository contains solutions to some of the competitive programming problems I've solved!
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="achievements">
        <SectionTitle accentText="03" title="Achievements" />
        <div className="text-body-container">
          <p>
          2018 Captain  College Handball Team Captain</p>
          <p>2019 Coordinator  College Handball Coordinator</p>
          <p>2020 302th  CodeChef October Long Challange 2020</p>
          <p>2020 114th  CodeChef December Long Challange 2020


 
          </p>
        </div>
      </div>

      <div className={containerClasses} id="education">
        <SectionTitle accentText="04" title="Education" />
        <div className="text-body-container">
          <p>
          I'm currently a student at Indraprastha Institute of Information Technology Delhi, where I'm part of Computer Science and Biosciences branch.
          </p>
        </div>
        <div className="h-8 lg:h-12"/>
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="IIITD" link="https://www.iiitd.ac.in/">
          <p>CGPA: 6.25 (Till 4th Sem)</p>
          <p>2018-2022 | Okhla Industrial Estate, DL</p>
          </LinkCard>
          <LinkCard title="RDPS" link="http://rdpschool.edu.in/">
          <p>Class 12th</p>
          <p> Percentage: 9.02 | CBSE 2016-2018 | Pitampura, DL</p>
          <p>Class 10th</p>
          <p>Percentage: 9.26 | CBSE 2006-2016 | Pitampura, DL</p>
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="contact">
        <SectionTitle accentText="05" title="Contact Me" />
        <div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
          <a className="link" href="singh.aditya@gmail.com" target="_blank">Email</a> · <a className="link" href="https://github.com/c9addy" target="_blank">Github</a> · <a className="link" href="https://www.linkedin.com/in/aditya-singh-ba71a2116/" target="_blank">Linkedin</a>
        </div>
      </div>

      <div className="h-8 md:h-12 lg:h-16"/>

      <div className={lastContainerClasses}>
        <div className="font-mono text-blueGray-400 text-xs md:text-sm lg:text-base">
          This site is built with <a className="link" href="https://nextjs.org/" target="_blank">Next.js</a> and <a className="link" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
          View the source code on <a className="link" href="https://github.com/thecodingwizard/personal-website" target="_blank">Github</a>.
        </div>
      </div>
    </div>
  )
}
