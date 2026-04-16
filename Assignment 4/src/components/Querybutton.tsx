import type { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type QueryProps = {
  children: ReactNode;
  to: string;
  matchParams?: Record<string, string>;
  whenClicked?: () => void;
};

export function Querybutton({ children, to, matchParams, whenClicked }: QueryProps){
    const location = useLocation();

  const currentParams = new URLSearchParams(location.search);

  const isQueryMatch =
    matchParams
      ? Object.entries(matchParams).every(
          ([key, value]) => currentParams.get(key) === value
        )
      : false;
  return (
    <NavLink
      to={to}
      onClick={whenClicked}
      className={() =>
        `px-4 py-2 rounded-md transition-all duration-200 border ${
          isQueryMatch
            ? 'bg-blue-500 text-white border-white shadow-lg scale-105'
            : 'bg-gray-700 text-gray-300 border-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-500'
        }`
      }
    >
      {children}
    </NavLink>
  );
};