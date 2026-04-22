import { Navlink } from "./Navlink";

type LinkGroupProps = {
    links: {
        label: string;
        to: string;
        match?: string;
    }[]
}

export default function LinkGroup({links}: LinkGroupProps){

    return <div className="flex gap-6">
    {links.map((link)=>(
        <Navlink key={link.label} to={link.to} match={link.match}>
            {link.label}
            </Navlink>
    ))}
    </div>
}