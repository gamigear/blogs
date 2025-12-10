
import React, { useEffect, useRef } from 'react'


const Backtotop = () => {
    const scrollToTopRef = useRef(null);
    const screenUp = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopRef.current) {
                window.scrollY > 100 ? (scrollToTopRef.current.style.display = "flex") : (scrollToTopRef.current.style.display = "none")
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={scrollToTopRef} className="scrollToTop" onClick={screenUp}>
            <span className="arrow"><i className="ti ti-arrow-big-up fs-16"></i></span>
        </div>
    )
}

export default Backtotop
