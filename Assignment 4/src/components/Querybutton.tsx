import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type QueryProps = {
  children: ReactNode;
  to?: string;
  matchParams?: Record<string, string>;
  active?: boolean
  whenClicked?: () => void;
};

export function QueryButton({ children, to, matchParams, whenClicked, active }: QueryProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentParams = new URLSearchParams(location.search);

  const isQueryMatch =
    matchParams
      ? Object.entries(matchParams).every(
          ([key, value]) => currentParams.get(key) === value
        )
      : false;

  const handleClick = () => {
    if (whenClicked) whenClicked();
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md transition-all duration-200 border ${
        isQueryMatch || active
          ? 'bg-blue-500 text-white border-white shadow-lg scale-105'
          : 'bg-gray-700 text-gray-300 border-gray-700 hover:bg-gray-600 hover:text-white hover:border-gray-500'
      }`}
    >
      {children}
    </button>
  );
}