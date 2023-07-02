import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import image from '../../assets/profile.jpg'

const About = () => {
    return (
        <section id="about" className="py-10">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-purple-600" />
            <h2 className="text-4xl font-bold text-center text-white">About Me</h2>
            <div className="flex justify-between items-center mt-10">
                <div className="w-1/2">
                    <img src={image} className='h-[450px]' alt="" />
                </div>

                <div className="w-1/2">
                <p className="text-xl font-bold text-purple-500">Who I&apos;m</p>
                <h3 className='text-4xl font-bold text-white'>Rana Sheikh</h3>
                <p className="mt-4 mb-6 w-full text-gray-300 text-justify">I am a passionate front-end web application developer. I mainly work with MERN stack. I have been working in this field for 1 years. I am a quick learner. I can easily adapt with new environments. I like to learn new technologies. I have completed Complete web development course with Jhankar Mahbub.</p>
                <p className="mt-4 mb-6 w-full text-gray-300 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptate delectus accusamus ab, placeat consequuntur veritatis neque reprehenderit illum! Quisquam molestiae perferendis, aut tempora cum nam est nihil animi eveniet? !</p>
                <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/ranasheikhzn/">
                        <FaLinkedin size={24} className='text-blue-500' />
                    </a>
                    <a href="https://www.github.com/ranasheikhzn">
                        <FaGithub size={24} className='text-blue-500' />
                    </a>
                    <a href="https://www.facebook.com/ranasheikhzn">
                        <FaFacebook size={24} className='text-blue-500' />
                    </a>
                    <a href="https://www.twitter.com/ranasheikhzn">
                        <FaTwitter size={24} className='text-blue-500' />
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;