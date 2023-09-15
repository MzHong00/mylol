import { RIOT_API_KEY } from "../constant/riot_api_key";

async function fetchUserByName(userName) {
    try {
        const response = await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${API_KEY}`)
        const data = await response.json();
    
        return data;
    } catch {
        console.log("존재하지 않은 사용자의 이름입니다.");
        return null;
    }
    
}

export { fetchUserByName, API_KEY};