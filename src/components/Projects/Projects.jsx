import { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    console.log(projects)

    return (
        <div id="projects" className="py-10">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
            <h2 className="poppins-font text-4xl font-bold text-center text-white">My Projects</h2>

            <div className="grid gap-10 md:gap-20 grid-cols-1 md:grid-cols-2 my-16">
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;