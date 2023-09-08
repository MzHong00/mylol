import { useParams } from "react-router-dom"
import { fetchChampionFull } from "../fetch/champion";
import styles from "./css/components.module.css"
import { useEffect, useState } from "react";

export default function ChampionDetail() {
    const { id } = useParams();
    const [champFull, setChampFull] = useState({});

    useEffect(() => {
        async function getChampionFull() {
            const champFull = await fetchChampionFull(id);
            console.log(champFull.data[id]);

            setChampFull(champFull);
        }

        getChampionFull();
    }, [id]);

    return (
        <div className={styles.championDetailContainer}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} alt={id}></img>
            
        </div>
    )
}