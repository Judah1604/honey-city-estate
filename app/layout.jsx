"use client";

import { Onest } from "next/font/google";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./Styles/base/common.css";
import "./Styles/base/media-queries.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const onest = Onest({
    weight: ["600", "700"],
    subsets: ["latin"],
    variable: "--font-onest",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Honey City</title>
            </head>
            <body className={onest.className}>
                <Navbar />
                {children}
                <Footer />
                <Script
                    src="https://kit.fontawesome.com/08c9114e01.js"
                    crossorigin="anonymous"
                ></Script>
            </body>
        </html>
    );
}
