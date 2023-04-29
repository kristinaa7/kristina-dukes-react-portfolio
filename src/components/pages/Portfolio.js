import React from "react";
import { projects } from "../data";
import Project from "../Project";


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