export interface NewWord {
  value: string;
}

export interface Word extends NewWord {
  id: number;
}
