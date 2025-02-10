import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
            {/* Link works exactly the same as <a></a> this prevents the entire page from refreshing every time a linked is clicked */}
            <Link to={"/"}>Home</Link>
            <Link to={"/users/mrbeast"}>Mr Beast</Link>
            <Link to={"/users/kyliejenner"}>Kylie Jenner</Link>
            <Link to={"/users/imancodes"}>Iman Musa</Link>

        </nav>
    )
}

export default Nav