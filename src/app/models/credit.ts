export interface ICredits {
    cast: IActor[];
  }

export interface IActor {
    name: string;
    profile_path: string;
    character: string;
    id: number;
  }