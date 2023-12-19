"use client";

import { motion } from "framer-motion";
import "../app/Styles/components/utils.css";

function Values() {
    return (
        <>
            <div className="container row my-2 values">
                <motion.div
                    className="value-card col-md-4"
                    initial={{ y: 250, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "tween" }}
                    viewport={{ once: "true" }}
                >
                    <i class="fa-solid fa-bullseye"></i>
                    <h2>Our Mission</h2>
                    <p>
                        To discover lands everywhere and make these known to you
                        and also show how you can make money to buy land and
                        build your own house.
                    </p>
                </motion.div>
                <motion.div
                    className="value-card col-md-4"
                    initial={{ y: 250, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "tween" }}
                    viewport={{ once: "true" }}
                >
                    <i className="fa-solid fa-ranking-star"></i>
                    <h2>Our Vision</h2>
                    <p>
                        To make home ownership dream a reality to as many people
                        as possible
                    </p>
                </motion.div>
            </div>
            <div className="about-us text-center p-4">
                <h2>About Us</h2>
                <p className="mt-2">
                    To discover lands everywhere and make these known to you and
                    also show how you can make money to buy land and build your
                    own house.
                </p>
            </div>
        </>
    );
}

export default Values;
