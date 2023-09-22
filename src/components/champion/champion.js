import { fetchChampion } from "../../fetch/champion"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/champion.module.css";
import Rotations from "./rotations";

export default function Champion() {
    const [champ, setChamp] = useState();
    const [search, setSearch] = useState("");

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        async function getChampion() {
            const champ = await fetchChampion();
            setChamp(champ.data);
        }

        getChampion();
    }, []);

    return (
        <div>
            <Rotations></Rotations>
            <div>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <svg className={styles.serachIcon} xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    <input className={styles.searchInput} onChange={onSearch}></input>
                </div>
                <div>
                    {search}
                </div>
            </div>
            <div>
                <div className={styles.championContainer}>
                    {
                        champ ? Object.keys(champ).map((key) => {
                            //console.log(key);
                            const src = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ[key].image.full}`;

                            if (search === key.toLowerCase().substr(0, search.length)) {
                                return (
                                    <div key={champ[key].id} className={styles.championBlock}  >
                                        <div className={styles.champion}>
                                            <Link to={`/champion/${key}`}>
                                                <img src={src} alt="w"></img>
                                            </Link>
                                            <div className={styles.championText}>
                                                {champ[key].id}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        }
                        ) : null
                    }
                </div>
            </div>
            </div>
        </div>
    )
}