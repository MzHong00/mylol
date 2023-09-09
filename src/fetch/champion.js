const API_KEY = "RGAPI-473e7821-22af-4ac8-8eb7-ded4a2a2e3ef"

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
    const res = await fetch(`https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`);
    const data = res.json();

    return data;
}

export { fetchChampion, fetchChampionFull, fetchChampionRotations }