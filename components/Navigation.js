const { default: Link } = require("next/link")
import globalStyles from "./Globals.module.css";
import navStyles from "./Navigation.module.css";

const Navigation = () => {
    return(
        <nav>
            <ul className={navStyles.ul}>
                <li className={navStyles.li}>
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