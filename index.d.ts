export type Route = {
  id: number;
  route: string;
  label: string;
};

export type Quote = {
  id: number;
  text: string;
  author: string;
};

export type QuoteDataObject = {
  authors: string[];
  quotes: Quote[];
};

export type Proverb = {
  id: number;
  text: string;
  origin: string;
};
export type ProverbDataObject = Proverb[];

export type Dialogues = {
  id: number;
  text: string;
  series: string;
  character: string;
};
export type DialoguesDataObject = Dialogues[];
