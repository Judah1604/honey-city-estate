"use client";
import { usePathname } from "next/navigation";
import "../node_modules/bootstrap/js/src/dropdown";

function Nav() {
    const pathname = usePathname();

    return (
        <div className="nav">
            <div className="nav-item">
                <a
                    href="/"
                    className={
                        pathname === "/" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </div>
            <div className="nav-item dropdown">
                <a
                    href="/about"
                    className={
                        pathname.includes("/about")
                            ? "nav-link dropdown-toggle active"
                            : "nav-link dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                >
                    About
                    <i class="fa-solid fa-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="/about/who-we-are">
                            Who we are
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="/about/founders">
                            Our Founders
                        </a>
                    </li>
                </ul>
            </div>

            <div className="nav-item">
                <a
                    href="/services"
                    className={
                        pathname === "/services"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Services
                </a>
            </div>
            <div className="nav-item">
                <a
                    href="/contact"
                    className={
                        pathname === "/contact" ? "nav-link active" : "nav-link"
                    }
                >
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Nav;
