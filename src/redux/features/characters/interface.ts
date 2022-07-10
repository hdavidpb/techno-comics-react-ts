export interface IInitialState {
  charactersData: null | ICharacterData;
  offsetCharacters: number;
  favorites: ICharacterResults[];
  renderFavorites: ICharacterResults[];
  loadingFavorites: boolean;
  characterDetail: null | ICharacterData;
  variantsData: null | ICharacterData;
  loadingVariants: boolean;
  loadingCharacters: boolean;
}

export interface ICharacterDataResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ICharacterData;
}

export interface ICharacterData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharacterResults[];
}

export interface ICharacterResults {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
  isFavorite?: boolean;
  userID?: string;
  docId?: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: Type;
}

export enum Type {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface URL {
  type: string;
  url: string;
}

export interface IDataQueryCharacter {
  limit?: number;
  offset?: number;
  nameStartsWith?: string;
}
