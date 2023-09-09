import { Link, useLocation } from "react-router-dom";
import styles from "./css/components.module.css";
import { useState, useEffect } from "react";

export const sideBarList = [
    "home", "champion", "rank"
]

export default function Sidebar() {
    const [currentList, setCurrentList] = useState();
    const location = useLocation();
    
    useEffect(() => {
        const currentPath = location.pathname.split("/")[1];
        setCurrentList(currentPath);
    }, [location.pathname]);

    return (
        <nav className={styles.sidebarContainer}>
            <Link to="/" className={styles.sidebarLogo}>MyLOL</Link>
            <ul>
                {sideBarList.map((list) =>
                    <li key={list}>
                        <Link to={`/${list}`} className={`${styles.sidebarList} ${list === currentList ? styles.sidebarFocus : null}`}>
                            {list.charAt(0).toUpperCase() + list.slice(1)}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}