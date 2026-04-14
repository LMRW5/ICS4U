import { Navlink } from "./Navlink";

export default function Navbar() {
    return (<>
        <nav>
            <Navlink to="/">Home</Navlink>
            <Navlink to="/now-playing">Now Playing</Navlink>

        </nav>
    </>)
}