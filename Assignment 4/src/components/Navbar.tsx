import { Navlink } from "./Navlink";

export default function Navbar() {
    return (<>
        <nav>
            <Navlink to="/">Home</Navlink>
            <Navlink to="/movies">Movies</Navlink>

        </nav>
    </>)
}