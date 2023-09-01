import Sidebar from "../components/sidebar"
import { Outlet } from "react-router-dom"
import "./main.css"

export default function Main() {

    return (
        <div className="main">
            <Sidebar></Sidebar>
            <div className="mainContents">
                <Outlet/>
            </div>
        </div>
    )
}