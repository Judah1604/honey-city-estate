'use client'
import { useState } from "react";
import "../app/Styles/components/static.css";
import { useScroll } from "framer-motion";

function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const { scrollYProgress } = useScroll();

    scrollYProgress.onChange(y => {
        setScrollY(y)
    })
    
    return (
        <>
            <footer className="p-5">
                <div>
                    <a href="/" className="navbar-brand text-uppercase fs-2">
                        Honey City
                    </a>
                    <div className="text">
                        <p className="address">123 Main Street, AnyTown USA</p>
                        <p>(123) 456-7891</p>
                        <p>example@emailprovider.com</p>
                    </div>
                </div>
                <div className="links">
                    <div className="socials">
                        <a href="#">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                    <p>Privacy Policy</p>
                </div>
            </footer>
            <a className={scrollY > 0 ? "back-to-top active" : "back-to-top" }href="#navbar">
                <i class="fa-solid fa-chevron-up"></i>
            </a>
        </>
    );
}

export default Footer;
