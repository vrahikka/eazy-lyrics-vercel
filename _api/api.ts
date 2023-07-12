import {
  ErrorMessage,
  SearchResult,
  SongDetails,
  SongLyric,
} from '@/src/types';

const { API_KEY } = process.env;

const headers = {
  'X-RapidAPI-Key': API_KEY ?? '',
  'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
};

export const search = async (
  searchString: string
): Promise<SearchResult | ErrorMessage | null> => {
  if (!searchString) {
    return null;
  }
  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${searchString}&per_page=20`; // 20 seems to be the max
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);

    const result: SearchResult | ErrorMessage = await response.json();
    if (response.status !== 200) {
      const error = result as ErrorMessage;
      console.error(error.message);
      return { ...error };
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const songLyric = async (
  id: number
): Promise<SongLyric | ErrorMessage | null> => {
  if (!id) {
    return null;
  }
  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}`;
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    const result: SongLyric | ErrorMessage = await response.json();

    if (response.status !== 200) {
      const error = result as ErrorMessage;
      console.error(error.message);
      return { ...error };
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const songDetails = async (
  id: number
): Promise<SongDetails | ErrorMessage | null> => {
  if (!id) {
    return null;
  }
  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${id}`;
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    const result: SongDetails | ErrorMessage = await response.json();

    if (response.status !== 200) {
      const error = result as ErrorMessage;
      console.error(error.message);
      return { ...error };
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
