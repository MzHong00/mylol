
const sideBarList = [
    "Home", "Champion"
]


export default function Sidebar() {

    return (
        <div className="sidebar">
            {sideBarList.map((list) =>
                <div key={list}>
                    {list}
                </div>
            )}
        </div>
    )
}