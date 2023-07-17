import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useEffect, useState } from "react";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const sections = ['about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);

            if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                setActiveSection(sections[i]);
                break;
            }
            else {
                setActiveSection('home')
            }
        }
    };

    return (
        <div id="home" className="bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B]">
            <Navbar activeSection={activeSection} />
            <Hero />
            <div className='max-w-7xl px-4 md:px-10 mx-auto'>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;