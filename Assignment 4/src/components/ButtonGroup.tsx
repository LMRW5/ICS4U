import { QueryButton } from "./Querybutton";

type ButtonGroupProps = {
  buttons: {
    to?: string;
    matchParams?: Record<string, string>;
    active?: boolean;
    whenClicked?: () => void;
    label: string;
  }[];
};

export default function ButtonGroup({ buttons }: ButtonGroupProps) {
  return (
    <div className="flex gap-3">
      {buttons.map((button) => (
        <QueryButton
          to={button.to}
          matchParams={button.matchParams}
          active={button.active}
          key={button.label}
          whenClicked={button.whenClicked}
        >
          {button.label}
        </QueryButton>
      ))}
    </div>
  );
}
