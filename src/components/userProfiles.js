import { fetchUserByName } from "../fetch/account"
import { useState, useEffect } from "react";

import { champion } from "../fetch/champion";

export default function UserProfiles() {
    const [user, setUser] = useState();

    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchUser() {
            if (user) {
                const userInfo = await fetchUserByName(user);
                setUserData(userInfo);
            }
        }

        fetchUser();
    }, [user]);

    function onSubmit(e) {
        e.preventDefault();
        setUser(e.target[0].value);
    }

    return (
        <>
            <div id="sidebar">
                <form onSubmit={onSubmit}>
                    <input placeholder="Search User" />
                    <button>검색</button>
                </form>
            </div>

            {
                userData ? <>{userData.puuid}</> : null
            }
            {
                champ ? Object.keys(champ).map((key) => {
                    console.log(champ[key].image);
                    const src= `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ[key].image.full}`;

                    return (
                        <div key={champ[key].id}>
                            <img src={src}></img>
                            <div>
                               {champ[key].id}
                            </div>
                        </div>
                    )
                }
                ) : null
            }
        </>
    )
}