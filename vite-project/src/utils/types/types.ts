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
  public: boolean | undefined;
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
