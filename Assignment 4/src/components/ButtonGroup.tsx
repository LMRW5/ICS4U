import type { ButtonGroupProps } from "@/core/types";
import { QueryButton } from "./Querybutton";


export function ButtonGroup({ buttons }: ButtonGroupProps) {
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
