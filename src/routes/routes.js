import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Home from "../components/home";
import Rank from "../components/rank";
import Champion from "../components/champion";
import { sideBarList } from "../components/sidebar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: `${sideBarList[0]}`,
                element: <Home></Home>
            },
            {
                path: `${sideBarList[1]}`,
                element: <Champion></Champion>
            },
            {
                path: `${sideBarList[2]}`,
                element: <Rank></Rank>
            }
        ]
    }
])

export default router;