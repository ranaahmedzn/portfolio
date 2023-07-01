import './Home.css'
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-[#0F2033] via-[#1B1631] to-[#0F172B] h-screen">
            <div className="hero">
                <div className='max-w-7xl px-10 mx-auto'>
                    <Navbar />
                    <Hero />
                </div>
            </div>
        </div>
    );
};

export default Home;