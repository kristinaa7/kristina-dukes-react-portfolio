import React from "react";
// import { projects } from "../data";
import Project from "../Project";
import MMN from "../../assets/images/matchmyneeds.png"
import LU from "../../assets/images/lookup.png"
import Cinerank from "../../assets/images/cinerank.png"
import CodingQuiz from "../../assets/images/codingquiz.png"
import Workday from "../../assets/images/workdayscheduler copy.png"
import StarterCode from "../../assets/images/debugging.png"
import PasswordGenerator from "../../assets/images/passwordgenerator.png"

const projects = [
  {
    title: "MatchMyNeeds",
    subtitle: "MERN GraphQL Group Project",
    description:
      "A hub for  for requesting items.",
    image: MMN,
    link: "https://matchmyneeds.herokuapp.com/",
  },
  {
    title: "Look-Up",
    subtitle: "Group Project",
    description:
      "A social media application for posting and viewing pictures of the sky.",
    image: LU,
    link: "https://look-up-project-2.herokuapp.com/",
  },
  {
    title: "Cinerank",
    subtitle: "Group Project",
    description:
      "A movie-goer's best friend for obtaining information on a movie.",
    image: Cinerank,
    link: "https://github.com/kristinaa7/personal-cinerank",
  },
  {
    title: "Coding Quiz",
    subtitle: "Javascript Challenge Assignment",
    description:
      "A fun javascript quiz for new coders.",
    image: CodingQuiz,
    link: "https://github.com/kristinaa7/coding-quiz-for-beginners-only",
  },
  {
    title: "Workday Scheduler",
    subtitle: "Third-Party APIs Challenge Assignment",
    description: "Organizing your work day with this user friendly design application.",
    image: Workday,
    link: "https://github.com/kristinaa7/work-day-scheduler",
  },
  {
    title: "Refactoring Starter Code",
    subtitle: "First Challenge to Debug Starter Code Assignment",
    description:
      "Refactoring a website to simply make it more accessible and functional for users using CSS and HTML",
    image: StarterCode,
    link: "https://github.com/kristinaa7/intro-to-cleaning-up-starter-code",
  },
  {
    title: "Password Generator",
    subtitle: "Javascript Challenge Assignment",
    description:
      "User-friendly random password generator that will create passwords ranging from 8-128 characters",
    image: PasswordGenerator,
    link: "https://github.com/kristinaa7/unique-random-password-generator",
  },
]

function Portfolio() {
    return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Apps I've Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here is a display of projects I have worked on as a student in the Full Stack Bootcamp.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
        <Project
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        link={project.link}
        image={project.image}
        key={project.image} />
        ))}
      </div>
    </div>
  </section>
    );
}

export default Portfolio;