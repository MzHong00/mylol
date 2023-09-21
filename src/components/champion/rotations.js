import { fetchChampionFull, fetchChampionRotations } from "../../fetch/champion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import styles from "../styles/rotations.module.css";

const useDrag = () => {
    const [isClick, setIsClick] = useState(false);
    const [clientX, setClientX] = useState();
    const [currentX, setCurrentX] = useState(0);
    const [diffX, setDiffX] = useState();
    const ref = useRef();

    const onMouseDown = (e) => {
        setIsClick(true);
        setClientX(e.clientX);
    }

    const onMouseMove = (e) => {
        if (isClick) {
            setDiffX(clientX - e.clientX + currentX);
            ref.current.style.transform = `translateX(${-diffX}px)`;
        }
    }

    const onMouseUp = () => {
        setIsClick(false);
        setCurrentX(diffX);
    }

    return { onMouseDown, onMouseMove, onMouseUp, ref };
}

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
                                    <span to={`/champion/${champion}`}>
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