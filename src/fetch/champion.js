import { RIOT_API_KEY } from "../constant/riot_api_key";

async function fetchChampion() {
    try {
        const res = await fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json");
        const data = res.json();

        return data;
    } catch {
        console.log("챔피언 fetch실패");

        return;
    }

}

async function fetchChampionFull() {
    const res = await fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/championFull.json");
    const data = res.json();

    return data;
}

async function fetchChampionRotations() {
    try {
        const res = await fetch(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`);
        const data = res.json();
    
        return data;
    } catch {
        console.log("API KEY 만료");

        return ;
    }
    
}

export { fetchChampion, fetchChampionFull, fetchChampionRotations }