import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project, id) => (
      <div key={id} >
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.image}/>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
}

export default Projects;