import React from "react";
import { projects } from "../data";

function Projects() {
    return (
        <section id="projects">
            <div>
                <h1>
                    Apps I've Built
                </h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                    facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                    fuga dolore.
                </p>
            </div>
            <div>
                <a
                    href={project.link}
                    key={project.image}>
                    <div>
                        <img
                            alt="gallery"
                            src={project.image}
                        />
                        <div>
                            <h2>
                                {project.subtitle}
                            </h2>
                            <h1>
                                {project.title}
                            </h1>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );

}

export default Projects;