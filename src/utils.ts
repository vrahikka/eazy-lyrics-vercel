import { ReleaseDate } from './types';

export const isServer = () => typeof window === 'undefined';
export const isClient = () => !isServer();

export const getReleaseDateString = (releaseDate?: ReleaseDate) =>
  releaseDate
    ? `${releaseDate.day}.${releaseDate.month}.${releaseDate.year}`
    : '';
