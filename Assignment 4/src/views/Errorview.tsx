import { useNavigate } from "react-router-dom"
export default function ErrorView() {
    const navigate = useNavigate()
    return (<>
        <h1>404</h1>
        <p>file not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </>)
}