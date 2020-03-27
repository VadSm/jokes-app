type JokeCategory = 'Miscellaneous' | 'Programming' | 'Dark';

export interface IJokeData {
  type: string;
  category: JokeCategory;
  setup?: string;
  delivery?: string;
  joke?: string;
}
