import { fetchChampionFull, fetchChampionRotations } from "../../fetch/champion";
import { useEffect, useState } from "react";
import React from "react";
import styles from "../styles/rotations.module.css";
import { useDrag } from "../../hooks/customHooks";


function Rotations() {
    const [rotations, setRotations] = useState();
    const rotationDrag = useDrag();

    useEffect(() => {
        async function getChampionKey() {
            const champFull = await fetchChampionFull();
            const champKey = champFull.keys;

            return champKey;
        }

        async function getChampionRotations() {
            try {
                const rotations = await fetchChampionRotations();
                const champKey = await getChampionKey();

                let rotation = [];
                rotations.freeChampionIds.map((rotationChampion) => (
                    rotation = [...rotation, champKey[rotationChampion]]
                )
                );

                setRotations(rotation);
            } catch {
                console.log("로테이션 챔피언 받아오기 실패")
            }

        }

        getChampionRotations();
    }, []);

    return (
        <div className={styles.rotation}>
            <div className={styles.rotationContainer}>
                <h1 className={styles.rotationTitle}>This week's rotations</h1>

                <div className={styles.rotationContents} {...rotationDrag}>
                    {
                        rotations ? rotations.map((champion) => {
                            const src = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${champion}.png`;

                            return (
                                <div key={champion}>
                                    <span>
                                        <img className={styles.rotationImg} src={src} alt="w"></img>
                                    </span>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Rotations);