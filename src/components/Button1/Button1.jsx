const Button1 = ({ children }) => {
    return (
        <button className="relative inline-flex items-center justify-center px-5 py-2 font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-[#3669ac] to-[#35aac7]">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#3669ac] to-[#35aac7]"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#3669ac] to-[#35aac7]"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-[#3669ac] from-[#35aac7]"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">{children}</span>
        </button>
    );
};

export default Button1;