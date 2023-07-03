import { useState } from "react";
import DetailsModal from "./DetailsModal";
import Button1 from "../Button1/Button1";

const Project = ({ project }) => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="w-full border border-purple-500 rounded-lg overflow-hidden">
            <img className="w-full" src={project.image} alt="" />

            <div className="p-5 space-y-5">
                <h3 className="text-2xl font-semibold text-gray-100">{project.name}</h3>
                <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque illo voluptas assumenda architecto mollitia laudantium culpa, labore est, accusantium qui debitis. Quibusdam beatae iste ducimus totam corrupti expedita repudiandae.</p>

                <div className="flex gap-3 justify-between">
                    <a href={project?.links?.client_code}><Button1>Client Code</Button1></a>
                    <a href={project?.links?.server_code}><Button1>Server Code</Button1></a>
                    <a href={project?.links?.live_site}><Button1>Live Site</Button1></a>
                    
                    <a onClick={() => setOpenModal(true)}><Button1>Details</Button1></a>
                </div>
            </div>
            {openModal && <DetailsModal id={project._id} setOpenModal={setOpenModal} />}
        </div>
    );
};

export default Project;