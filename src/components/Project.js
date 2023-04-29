import React from "react";

function Project(props) {
    return (
<div>
<h1>{props.title}</h1>
<a
href={props.link}
key={props.image}
className="sm:w-1/2 w-100 p-4">
<div className="flex relative">
  <img
    alt="gallery"
    className="absolute inset-0 w-full h-full object-cover object-center"
    src={process.env.PUBLIC_URL+props.image}
    width="400"
    height='300'
  />
  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
      {props.subtitle}
    </h2>
    <h1 className="title-font text-lg font-medium text-white mb-3">
      {props.title}
    </h1>
    <p className="leading-relaxed">{props.description}</p>
  </div>
</div>
</a>
</div>
    );
}

export default Project;