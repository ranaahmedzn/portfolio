import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <hr className="border-1 border-gray-700" />
            <div className="max-w-7xl px-4 md:px-10 mx-auto text-gray-300 flex flex-col md:flex-row justify-between items-center py-6 space-y-4">
                <h3 className="font-bold text-2xl text-gray-300"><span className="text-[#35aac7]">RANA</span> AHMED</h3>
                <p>&copy; Copyright 2023 | All right reserved.</p>
                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/ranaahmedzn/">
                        <FaLinkedin size={18} className='text-gray-400 hover:text-[#35aac7]' />
                    </a>
                    <a href="https://www.github.com/ranaahmedzn">
                        <FaGithub size={18} className='text-gray-400 hover:text-[#35aac7]' />
                    </a>
                    <a href="https://www.facebook.com/ranaahmedzn">
                        <FaFacebook size={18} className='text-gray-400 hover:text-[#35aac7]' />
                    </a>
                    <a href="https://www.twitter.com/ranaahmedzn">
                        <FaTwitter size={18} className='text-gray-400 hover:text-[#35aac7]' />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;