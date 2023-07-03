import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr className="border-1 border-gray-700" />
            <div className="max-w-7xl px-10 mx-auto text-gray-300 flex justify-between items-center py-6">
                <h3 className="font-bold text-2xl mb-1 text-gray-300"><span className="text-[#6f54ef]">Rana</span> Sheikh</h3>
                <p>&copy; Copyright 2023 | All right reserved.</p>
                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/ranasheikhzn/">
                        <FaLinkedin size={18} className='text-blue-500' />
                    </a>
                    <a href="https://www.github.com/ranasheikhzn">
                        <FaGithub size={18} className='text-blue-500' />
                    </a>
                    <a href="https://www.facebook.com/ranasheikhzn">
                        <FaFacebook size={18} className='text-blue-500' />
                    </a>
                    <a href="https://www.twitter.com/ranasheikhzn">
                        <FaTwitter size={18} className='text-blue-500' />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;