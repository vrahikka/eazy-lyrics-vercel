import { isClient } from './utils';

const FAVORITES_KEY = 'favorites';
const MAX_RECENT_SEARCHES = 20;

export function setRecentSearch(value: string) {
  if (isClient() && localStorage) {
    const raw = localStorage.getItem(FAVORITES_KEY);
    let favorites: string[] = [];

    if (raw) {
      favorites = JSON.parse(raw) as string[];
    }

    if (favorites && !favorites.find((fav) => fav === value)) {
      if (favorites.length >= MAX_RECENT_SEARCHES) {
        favorites = favorites.slice(0, MAX_RECENT_SEARCHES);
      }
      favorites.push(value);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }
}

export function getRecentSearches() {
  if (isClient() && localStorage) {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (raw) {
      const favorites = JSON.parse(raw) as string[] | undefined;
      return favorites;
    }
  }
  return undefined;
}

export function deleteRecentSearch(deleteValue: string) {
  if (isClient() && localStorage) {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (raw) {
      const favorites = JSON.parse(raw) as string[];
      const newFavorites = favorites.filter((value) => value !== deleteValue);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }
  }
}
