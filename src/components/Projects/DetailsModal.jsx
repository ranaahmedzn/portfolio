import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button1 from "../Button1/Button1";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const DetailsModal = ({ id, setOpenModal }) => {
    const [project, setProject] = useState({})

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => {
            const project = data.find(project => project._id === id)
            setProject(project)
            // console.log(project)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            data-aos="flip-left"
            className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-hidden md:inset-0 h-screen max-h-screen flex justify-center items-center bg-black/70 backdrop-blur"
        >
            <div className="relative overflow-hidden rounded-2xl w-full max-w-2xl h-4/5 border border-[#35aac7]/30 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] shadow-[0_25px_70px_rgba(15,23,42,0.95)]">
                <div className="h-full overflow-y-auto">
                    <button
                        onClick={() => setOpenModal(false)}
                        type="button"
                        className="absolute top-3 right-3 z-10 text-gray-300 rounded-full p-2 bg-gradient-to-br from-[#3669ac] to-[#35aac7] hover:scale-105 transition duration-300"
                    >
                        <FaXmark />
                    </button>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        className="p-6 md:p-8 overflow-hidden rounded-2xl"
                    >
                        <div className="flex flex-col gap-4 mb-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.18em] text-sky-400 mb-1 uppercase">
                                        {project?.tag === "Contributed" ? "Contributed project" : "Personal project"}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                            <img className="w-full rounded-xl border border-slate-800/80" src={project.image} alt={project.name} />
                        </div>

                        <div className="mt-3 mb-6">
                            <h3 className="mb-3 text-lg md:text-xl font-semibold text-gray-100">
                                Used Technologies
                            </h3>
                            <div className="flex gap-2 items-center flex-wrap">
                                {project?.used_technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2.5 py-1 bg-[#0f172a] text-blue-300 text-xs md:text-sm font-medium rounded-md border border-slate-700/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-3 mb-6">
                            <h3 className="mb-3 text-lg md:text-xl font-semibold text-gray-100">
                                Features
                            </h3>
                            <ul className="list-outside list-disc pl-5 space-y-2 text-gray-100 text-sm md:text-[15px]">
                                {project?.features?.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                            {project?.links?.live_site && (
                                <a
                                    href={project.links.live_site}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button1>
                                        <span className="flex items-center gap-2">
                                            <span>Live Site</span>
                                            <BsBoxArrowUpRight />
                                        </span>
                                    </Button1>
                                </a>
                            )}

                            {project?.tag !== "Contributed" && project?.links?.client_code && (
                                <a
                                    href={project.links.client_code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button1>
                                        <span className="flex items-center gap-2">
                                            <FaGithub />
                                            <span>Client Code</span>
                                        </span>
                                    </Button1>
                                </a>
                            )}

                            {project?.tag !== "Contributed" && project?.links?.server_code && (
                                <a
                                    href={project.links.server_code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button1>
                                        <span className="flex items-center gap-2">
                                            <FaGithub />
                                            <span>Server Code</span>
                                        </span>
                                    </Button1>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;