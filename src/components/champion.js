import { useEffect } from "react";
import { fetchChampion, fetchChampionFull, fetchChampionRotations } from "../fetch/champion"
import { useState } from "react";
import styles from "./css/components.module.css";
import { Link } from "react-router-dom";

export default function Champion() {
    const [champ, setChamp] = useState();
    const [rotations, setRotations] = useState();

    useEffect(() => {
        async function getChampion() {
            const champ = await fetchChampion();
            setChamp(champ.data);
        }

        async function getChampionKey() {
            const champFull = await fetchChampionFull();
            const champKey = champFull.keys;

            return champKey;
        }

        async function getChampionRotations() {
            const rotations = await fetchChampionRotations();
            const champKey = await getChampionKey();

            let rotation = [];
            rotations.freeChampionIds.map((rotationChampion) => {
                rotation = [...rotation, champKey[rotationChampion]];
            })

            setRotations(rotation);
        }

        getChampion();
        getChampionRotations();
    }, []);

    return (
        <div>
            <div className={styles.championListTitle}>
                <div>
                    {
                        rotations ? rotations.map((champion) => {
                            const src = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champion}.png`;

                            return (
                                <div key={champion}>
                                    <Link to={`/champion/${champion}`}>
                                        <img src={src} alt="w"></img>
                                    </Link>
                                </div>
                            )
                        }) : null
                    }
                </div>
                <h1 className={styles.championTitleText}>챔피언</h1>
            </div>
            <div className={styles.championContainer}>
                {
                    champ ? Object.keys(champ).map((key) => {
                        //console.log(champ[key].image);
                        const src = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ[key].image.full}`;

                        return (
                            <div key={champ[key].id} className={styles.championBlock}>
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
                    }
                    ) : null
                }
            </div>
        </div>
    )
}