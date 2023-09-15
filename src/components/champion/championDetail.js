import { useParams } from "react-router-dom"
import styles from "../styles/champion.module.css"

export default function ChampionDetail() {
    const { id } = useParams();

    return (
        <div className={styles.championDetailContainer}>
            <div style={{
                backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`,
            }} className={styles.championSplash}>
                <div className={styles.championSplashBlur}>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} alt={id} className={styles.championImg}></img>
                </div>
            </div>
            <div>
                {id}
            </div>
        </div>
    )
}