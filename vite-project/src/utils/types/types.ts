export interface PropsVisitorCard {
  name: string | undefined;
  date: string | undefined;
  status: string | undefined;
  gender: string | undefined;
  public: string | undefined;
  picture: string | undefined;
}

export type CardInfo = {
  name: string | undefined;
  date: string | undefined;
  status: string | undefined;
  public: string | undefined;
  gender: string | undefined;
  file: string | undefined;
  id: number;
};

export interface MyState {
  arrCards: CardInfo[];
  currentStatus: string | undefined;
  currentGender: string | undefined;
  currentPublic: boolean | undefined;
  currentImg: File | undefined;
  id: number;
}

export interface CardProps {
  picture: string;
  name: string;
  year: string;
}

export interface FormData {
  name: string;
  date: string;
  status: string;
  public: boolean;
  gender: string;
  picture: string;
}
