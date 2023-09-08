import { useEffect } from "react";
import { fetchChampion } from "../fetch/champion"
import { useState } from "react";
import styles from "./css/components.module.css";
import { Link } from "react-router-dom";

export default function Champion() {
    const [champ, setChamp] = useState();

    useEffect(() => {
        async function getChampion() {
            const champ = await fetchChampion();
            setChamp(champ.data);
        }

        getChampion();
    }, []);

    return (
        <div>
            <h2>챔피언 정보</h2>

            <div className={styles.championContainer}>
                {
                    champ ? Object.keys(champ).map((key) => {
                        //console.log(champ[key].image);
                        const src = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ[key].image.full}`;

                        return (
                            <div key={champ[key].id}>
                                <Link to={`/champion/${key}`}>
                                    <img src={src} alt="w"></img>
                                </Link>
                                <div>
                                    {champ[key].id}
                                </div>
                            </div>
                        )
                    }
                    ) : null
                }
            </div>
        </div>
    )
}