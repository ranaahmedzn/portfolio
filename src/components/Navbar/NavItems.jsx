import { Link as ScrollLink } from 'react-scroll';
import resume from '../../assets/rana-resume.pdf'

const NavItems = () => {
    return (
        <>
            <li>
                <ScrollLink className="active" to="home" smooth={true} duration={500} offset={-80}>
                    Home
                </ScrollLink>
            </li>
            <li>
                <ScrollLink className="default" to="about" smooth={true} duration={500} offset={-80}>
                    About
                </ScrollLink>
            </li>
            <li>
                <ScrollLink className="default" to="projects" smooth={true} duration={500} offset={-80}>
                    Projects
                </ScrollLink>
            </li>
            <li>
                <ScrollLink className="default" to="contact" smooth={true} duration={500} offset={-80}>
                    Contact
                </ScrollLink>
            </li>
            <li>
                <a download href={resume} className="ml-5 relative inline-flex items-center justify-center px-5 py-2 font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500">
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Download Resume</span>
                </a>
            </li>
        </>
    );
};

export default NavItems;