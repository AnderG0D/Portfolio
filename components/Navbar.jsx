import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black bg-[radial-gradient(circle, rgba(139,0,0,0.4) 10%, transparent 50%)] text-white shadow-lg z-50">
            {/* Logo */}
            <Link
                href="#home"
                className="flex items-center space-x-2 text-4xl font-extrabold text-yellow-500"
            >
                EA
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-6 text-lg">
                <li>
                    <Link
                        href="#home"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="#about"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="#skills"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        href="#projects"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="#experience"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link
                        href="#contact"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
