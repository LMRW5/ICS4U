import { useNavigate } from "react-router-dom"
export default function Errorview() {
    const navigate = useNavigate()
    return (<>
        <h1>404</h1>
        <p>file not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </>)
}