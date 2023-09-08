
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

async function fetchChampionFull(champion) {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion/${champion}.json`);
    const data = res.json();

    return data;
}

export { fetchChampion, fetchChampionFull }