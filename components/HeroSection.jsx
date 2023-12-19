"use client";
import { motion } from "framer-motion";
import "../app/Styles/components/hero.css";

function HeroSection() {
    return (
        <>
            <div className="hero-section">
                <div className="text">
                    <motion.h1
                        initial={{ x: 250 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, type: 'tween' }}
                        className="mb-4"
                    >
                        Building homes, fostering community living & comfortable lifestyle
                        <br />
                        <a
                            href="/book-an-inspection"
                            className="btn btn-dark icon-left mt-3"
                        >
                            <i class="fa-solid fa-binoculars"></i> Book an
                            Inspection
                        </a>
                    </motion.h1>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
