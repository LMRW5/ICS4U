import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
export default function ErrorView() {
    const navigate = useNavigate()
    return (<section className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900 text-white">
        <h1 className="font-bold">404</h1>
        <p>File not found</p>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
    </section>)
}