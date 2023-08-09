const { default: Link } = require("next/link")
import globalStyles from "./Globals.module.css";

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/certifications">Certifications</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;