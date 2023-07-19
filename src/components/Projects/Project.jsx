import { useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";
import Button1 from "../Button1/Button1";
import { FaGithub } from "react-icons/fa";
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
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" className="w-full border border-[#6f54ef] rounded-lg overflow-hidden">
            <img className="w-full" src={project.image} alt="" />

            <div className="p-5 space-y-5">
                <h3 className="text-2xl font-semibold text-gray-100">{project.name}</h3>
                <p className="lato-font text-gray-400">{project.details}</p>

                <div className="hidden md:flex flex-wrap gap-3">
                    <a href={project?.links?.client_code}><Button1>Client Code</Button1></a>
                    {project?.links?.server_code && <a href={project?.links?.server_code}><Button1>Server Code</Button1></a>}
                    <a href={project?.links?.live_site}><Button1>Live Site</Button1></a>

                    <a onClick={() => setOpenModal(true)}><Button1>Details</Button1></a>
                </div>

                <div className="flex gap-4 items-center md:hidden">
                    <a href={project?.links?.client_code}><FaGithub size={26} className="text-[#6f54ef]" /></a>
                    {project?.links?.server_code && <a href={project?.links?.server_code}><FaGithub size={26} className="text-[#6f54ef]" /></a>}
                    <a href={project?.links?.live_site}><BsBoxArrowUpRight size={26} className="text-[#6f54ef]" /></a>

                    <a className="ml-auto" onClick={() => setOpenModal(true)}><Button1>Details</Button1></a>
                </div>
            </div>
            {openModal && <DetailsModal id={project._id} setOpenModal={setOpenModal} />}
        </div>
    );
};

export default Project;