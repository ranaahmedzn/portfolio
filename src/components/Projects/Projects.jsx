import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    console.log(projects)

    return (
        <div id="projects" className="py-10">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-purple-600" />
            <h2 className="text-4xl font-bold text-center text-white">My Projects</h2>

            <div className="grid gap-x-20 gap-y-20 grid-cols-2 my-20">
                {
                    projects.map(project => <div
                    key={project._id}
                    className="w-full border border-purple-500 rounded-lg overflow-hidden">
                    <img className="w-full" src={project.image} alt="" />

                    <div className="p-5 space-y-5">
                        <div className="flex gap-2 items-center flex-wrap">
                            {
                                project.used_technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-[#1B3F5E] text-blue-400 text-sm font-medium rounded-md">{tech}</span>)
                            }
                        </div>

                        <div className="flex gap-3">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Client Code</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Server Code</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Live Site</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Projects;