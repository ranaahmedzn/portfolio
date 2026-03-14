import { useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";
import Button1 from "../Button1/Button1";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ project }) => {
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (openModal) {
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        }, 200)

        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [openModal]);

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0F2033] via-[#111827] to-[#020617] border border-[#1f2937] shadow-[0_20px_45px_rgba(15,23,42,0.75)] hover:translate-y-[-4px] hover:shadow-[0_25px_60px_rgba(15,23,42,0.9)] transition-all duration-300"
        >
            <div className="relative">
                <img className="w-full aspect-video object-cover" src={project.image} alt={project.name} />
                {project?.tag && (
                    <span className="absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-black/70 border border-white/20 text-gray-100 backdrop-blur">
                        {project.tag === "Contributed" ? "CONTRIBUTED" : "PERSONAL"}
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-100 tracking-tight">
                    {project.name}
                </h3>
                <p className="lato-font text-sm md:text-[15px] leading-relaxed text-gray-400 line-clamp-3">
                    {project.details}
                </p>

                <div className="mt-2 flex flex-col sm:flex-row gap-3">
                    <button
                        type="button"
                        onClick={() => setOpenModal(true)}
                        className="w-full sm:w-auto"
                    >
                        <Button1>View Details</Button1>
                    </button>
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
                </div>
            </div>
            {openModal && <DetailsModal id={project._id} setOpenModal={setOpenModal} />}
        </div>
    );
};

export default Project;