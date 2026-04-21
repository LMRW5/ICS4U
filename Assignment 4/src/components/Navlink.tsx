import type { ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";

type LinkProps = {
  children: ReactNode;
  to: string;
  match?: string;
  whenClicked?: () => void;
  replace?: boolean;
};

export const Navlink = ({ children, to, match, whenClicked, replace }: LinkProps) => {
  const matched = match ? useMatch(match) : null;

  return (
    <NavLink
      to={to}
      onClick={whenClicked}
      replace={replace}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-all duration-200 border ${
          isActive || !!matched
            ? "bg-blue-500 text-white border-white shadow-lg scale-105"
            : "bg-gray-700 text-gray-300 border-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-500"
        }`
      }
    >
      {children}
    </NavLink>
  );
};
