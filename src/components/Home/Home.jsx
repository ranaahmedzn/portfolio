import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Home = () => {
    return (
        <div id="home" className="bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B]">
            <Navbar />
            <Hero />
            <div className='max-w-7xl px-10 mx-auto'>
                <About />
                <Contact />
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;