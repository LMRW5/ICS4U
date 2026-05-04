import type { LinkGroupProps } from "@/core/types";
import { Navlink } from "./Navlink";


export function LinkGroup({ links }: LinkGroupProps) {
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        
        <Navlink replace={link.replace} key={link.label} to={link.to} match={link.match} whenClicked={link.whenClicked}>
          {link.label}
        </Navlink>
      ))}
    </div>
  );
}
