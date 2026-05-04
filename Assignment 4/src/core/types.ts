import type { ReactNode } from "react";

export type MovieResponse = {
    results: {
        id: number;
        title: string;
        poster_path: string;
    }[];
    total_pages: number;
};

export type TVResponse = {
    results: {
        id: number;
        name: string;
        poster_path: string;
    }[];
    total_pages: number;
};

export type TrailerProps = {
    results: {
        site: string;
        official: boolean;
        key: string;
        type: string;
        name: string;
        id: string;
    }[];
};

export type SeasonsProps = {
    number_of_seasons: number;
    seasons: {
        id: number;
        name: string;
        poster_path: string;
        season_number: number;
        air_date: string;
    }[];
};

export
    type SearchProps = {
        results: [];
        total_pages: number;
    }

export type ReviewsProps = {
    results: {
        author: string;
        id: number;
        content: string;
    }[];
    total_pages: number;
};

export type PersonProps = {
    birthday: string;
    biography: string;
    id: number;
    name: string;
    profile_path: string;
    place_of_birth: string;
};

export type MovieData = {
    title: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;

};

export type ImageProps = {
    profiles: {
        file_path: string;
    }[];
};

export type EpisodeProps = {
    air_date: string;
    overview: string;
    episodes: {
        air_date: string;
        episode_number: number;
        name: string;
        still_path: string;
        id: number;
    }[]
};

export type CreditsProps = {
    cast: {
        id: number;
        name: string;
        profile_path: string;
        character: string;
    }[];
};

export type CareerProps = {
    cast: {
        poster_path: string;
        title: string;
        character: string;
        id: number;
    }[];
};

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'grey';
  disabled?: boolean;
  onClick: () => void;
};

export type ButtonGroupProps = {
  buttons: {
    to?: string;
    matchParams?: Record<string, string>;
    active?: boolean;
    whenClicked?: () => void;
    label: string;
  }[];
};

export type ImagegridProps = {
    data: {
      id?: number | string;
      primaryText?: string;
      imagePath?: string;
      secondaryText?: string;
      episode_number?: number;
    }[];
    whenClicked?: (id: number | string) => void;
  };

export type LinkGroupProps = {
    links: {
      label: string;
      to: string;
      match?: string;
      whenClicked?: () => void;
      replace?: boolean;
    }[];
  };
  
export type ModalProps = {
    onClose: () => void;
    children: ReactNode;
  };

export type LinkProps = {
    children: ReactNode;
    to: string;
    match?: string;
    whenClicked?: () => void;
    replace?: boolean;
  };
export type PaginationProps = {
    setPage: (value: number) => void;
    totalPages: number;
    page: number;
  };

export type QueryProps = {
    children: ReactNode;
    to?: string;
    matchParams?: Record<string, string>;
    active?: boolean
    whenClicked?: () => void;
  };