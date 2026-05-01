import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export function HomeView(){
    const navigate = useNavigate();
    return (<section className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-8'>
    <h1 className="text-xl">ICS4U assignment 4</h1>
        <h1 className="text-4xl font-bold">TMDB Explorer</h1>

    <Button onClick={()=>{navigate("/movies")}}>Enter</Button>
    </section>)
}