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

export interface ApiInfo {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  pisode: string[];
  url: string;
  created: string;
}

export interface ApiCard {
  isModal: (arg: boolean) => void;
  numCard: (arg: number) => void;
  id: number;
  picture: string;
  name: string;
  species: string;
}

export interface UrlForm {
  setUrlForm: (arg: string) => void;
}

export interface ModalCardProps {
  isModal: (arg: boolean) => void;
  modalId: number;
}
