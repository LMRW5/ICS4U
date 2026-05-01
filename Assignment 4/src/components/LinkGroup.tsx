import { Navlink } from "./Navlink";

type LinkGroupProps = {
  links: {
    label: string;
    to: string;
    match?: string;
    whenClicked?: () => void;
    replace?: boolean;
  }[];
};

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
