import { useState } from "react";
// import logo from '../../assets/my-logo.png'
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="antialiased">
            <nav className="relative flex flex-wrap items-center justify-between w-full py-4 md:py-5 px-3 md:px-0 text-lg">
                <div>
                    {/* <Link to="/"><img className="h-[70px]" src={logo} alt="" /></Link> */}
                    <Link to="/" className="text-3xl font-medium text-white">Rana Sheikh</Link>
                </div>

                <span className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <HiXMark size={24}></HiXMark> : <HiBars3BottomRight size={24}></HiBars3BottomRight>}
                </span>


                <div className="w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="text-base text-gray-700 hidden md:flex md:items-center">
                        <NavItems />
                    </ul>

                    <div className={`w-full md:hidden overflow-hidden text-gray-700 bg-white transition-all duration-500 ${open ? "h-[250px]" : "h-0"}`}>
                        <ul className="pt-4">
                            <NavItems />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;