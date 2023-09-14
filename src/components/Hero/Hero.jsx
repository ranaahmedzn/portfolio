import { FaArrowRight } from "react-icons/fa";
import profileImg from '../../assets/ranaahmed.jpg'
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
    return (
        <div style={{ backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFnJybwsLB5ublu7u7m5ubAAAA5ublHkCv9wAAAAd0Uk5TCQgJBgcACA9AjvwAAAAhSURBVHicY2BUwgCKDCahGCCEIRVTMHRUcFRwxAliyx0A6BQHnn3kz9cAAAAASUVORK5CYII=)"}}>
            <div className="h-[calc(100vh-80px)] max-w-7xl px-4 md:px-10 mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
                <div className="w-full md:w-3/5 py-3 overflow-hidden md:overflow-visible"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="2000"
                    data-aos-easing="linear"
                    data-aos-once="true"
                >
                    <p className="text-2xl md:text-3xl mb-3 font-bold text-[#6f54ef]">HEY!</p>
                    <h2 className='text-4xl md:text-[50px] mb-4 md:mb-5 poppins-font font-bold text-gray-100'>I&apos;m Rana Ahmed</h2>
                    <TypeAnimation
                        className='text-xl md:text-3xl poppins-font font-medium text-gray-100'
                        sequence={[
                            "And I'm a MERN Stack Developer",
                            1000,
                            "And I'm a Junior Web Developer",
                            1000,
                            "And I'm a Front-End Developer",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                    <p className="roboto-font mt-4 mb-6 w-full md:w-5/6 text-gray-400">Welcome to my captivating portfolio website! I am a passionate front-end web application developer with expertise in building exceptional websites using the powerful MERN stack. Explore my portfolio and witness the magic of my creations!</p>
                    <div>
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                            <button data-aos="fade-up-right" data-aos-delay="600" data-aos-once="true" data-aos-duration="2000" data-aos-offset="50" className="px-7 py-3 mr-5 relative inline-flex items-center justify-center font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group">
                                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                <span className="relative">View Works</span>
                            </button>
                        </ScrollLink>

                        <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
                            <button data-aos="fade-up-left" data-aos-delay="600" data-aos-once="true" data-aos-duration="2000" data-aos-offset="50" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-[#6f54ef] transition duration-300 ease-out border-2 border-[#6f54ef] hover:border-transparent rounded-lg group">
                                <span className="absolute inset-0 flex gap-2 items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-blue-500 to-purple-600 group group-hover:translate-x-0 ease">
                                    <span>Hire Me</span>
                                    <FaArrowRight />
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-[#6f54ef] transition-all duration-300 transform group-hover:translate-x-full ease">Hire Me</span>
                                <span className="relative invisible">Hire Me</span>
                            </button>
                        </ScrollLink>
                    </div>
                </div>
                <div className="w-2/5"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="linear"
                    data-aos-once="true"
                >
                    <img src={profileImg} alt="" width={380} className="rounded-full ml-auto ring-2 ring-[#6f54ef]" />
                </div>
            </div>
        </div>
    );
};

export default Hero;