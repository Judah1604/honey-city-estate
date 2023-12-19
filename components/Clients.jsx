'use client'

import Image from "next/image";
import { motion } from "framer-motion";

function Clients() {
    return (
        <div className="container my-4">
            <h1 className="mb-4">Our Clients</h1>
            <div className="clients mt-3 row overflow-hidden">
                <motion.div
                    className="img col-md-3"
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.2 }}
                    viewport={{ once: "true" }}
                >
                    <Image
                        src={"/images-fake/chairman.png"}
                        alt="Client"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </motion.div>
                <motion.div
                    className="img col-md-3"
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.5 }}
                    viewport={{ once: "true" }}
                >
                    <Image
                        src={"/images-fake/chairman.png"}
                        alt="Client"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </motion.div>
                <motion.div
                    className="img col-md-3"
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", delay: 0.8 }}
                    viewport={{ once: "true" }}
                >
                    <Image
                        src={"/images-fake/chairman.png"}
                        alt="Client"
                        width={500}
                        height={500}
                        layout="responsive"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Clients;
