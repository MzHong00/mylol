import { Link } from "react-router-dom";
import styles from "./css/components.module.css";

export const sideBarList = [
    "home", "champion", "Rank"
]

export default function Sidebar() {

    return (
        <nav className={styles.sidebarContainer}>
            <Link to="/home" className={styles.sidebarLogo}>MyLOL</Link>
            <ul >
                {sideBarList.map((list) =>
                    <li key={list}>
                        <Link to={`/${list}`} className={styles.sidebarList}>{list}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}