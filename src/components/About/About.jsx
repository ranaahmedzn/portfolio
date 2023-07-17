import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import image from '../../assets/image.jpg'

const About = () => {
    return (
        <section id="about" className="pt-10 pb-20">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-[#6f54ef]" />
            <h2 className="poppins-font text-4xl font-bold text-center text-white">About Me</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200" className="w-full md:w-1/2 mb-5">
                    <img src={image} className='h-[450px] rounded-lg' alt="" />
                </div>

                <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200" className="w-full md:w-1/2">
                <p className="text-xl mb-1 font-bold text-[#6f54ef] poppins-font">Who I&apos;m</p>
                <h3 className='text-4xl font-bold text-gray-100 poppins-font'>My name is Rana Sheikh,</h3>
                <p className="mt-4 mb-6 w-full text-gray-300 text-justify"> a 20-year-old junior web application developer, and I stand tall at 5 feet 8 inches. Currently pursuing a Bachelor of Arts degree at Sirajganj Government College under the esteemed National University of Bangladesh, I am fueling my passion for technology and web development. I live in the picturesque village of Enayetpur in Sirajganj.</p>
                <p className="mt-4 mb-6 w-full text-gray-300 text-justify">Coding isn&apos;t just a job for me; it&apos;s a passion that I pursue with dedication and enthusiasm. I constantly immerse myself in technological blogs and articles, keeping up-to-date with the latest trends and innovations. My hobbies are traveling and exploring new places. I enjoy watching adventurous movies and animated series.</p>

                <p className="text-xl font-bold text-[#6f54ef] poppins-font mb-3">To know more Visit my_</p>
                <div className="flex gap-3 text-gray-400">
                    <a href="https://www.linkedin.com/in/ranasheikhzn/">
                        <FaLinkedin size={24} className='hover:text-[#6f54ef] transition-all'/>
                    </a>
                    <a href="https://www.github.com/ranasheikhzn">
                        <FaGithub size={24} className='hover:text-[#6f54ef] transition-all'/>
                    </a>
                    <a href="https://www.facebook.com/ranasheikhzn">
                        <FaFacebook size={24} className='hover:text-[#6f54ef] transition-all'/>
                    </a>
                    <a href="https://www.twitter.com/ranasheikhzn">
                        <FaTwitter size={24} className='hover:text-[#6f54ef] transition-all'/>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;