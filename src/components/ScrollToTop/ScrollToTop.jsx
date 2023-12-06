import { useEffect, useState } from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuint',
          });
    };

    return (
        <div>
            {isVisible && (
                <button data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-in-out" className="fixed right-7 bottom-5 text-white p-5 bg-gradient-to-br from-[#3669ac] to-[#35aac7] rounded-full animate-bounce" onClick={scrollToTop}>
                    <FaAngleDoubleUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;