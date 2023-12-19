"use client";
import "../app/Styles/components/static.css";
import { useState } from "react";
import Nav from "./Nav";

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar" id="navbar">
            <div className="container py-3">
                <a href="/" className="navbar-brand text-uppercase fs-2">
                    Honey City
                </a>
                <Nav />
                <div
                    className={isActive ? "menu-icon active" : "menu-icon"}
                    onClick={() => setIsActive(!isActive)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={isActive ? "menu active" : "menu"}>
                    <Nav />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
