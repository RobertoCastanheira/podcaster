import { writable } from "svelte/store";
import fetch from "cross-fetch";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import {
  checkIfExpired,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
import { parseDescriptionFromFeed } from "../utils/parseRssFeed";

dayjs.extend(duration);

export const podcast = writable({});

const JSONP_URL = "https://cors-anywhere.herokuapp.com/";

const URL = JSONP_URL + "https://itunes.apple.com/lookup?id=";

const fetchAndStore = async (podcastId, STORAGE_KEY) => {
  const response = await fetch(`${URL}${podcastId}`);
  const data = await response.json();
  const podcastData = data.results[0];

  const episodeResponse = await fetch(
    `${URL}${podcastData.collectionId}&entity=podcastEpisode`
  );

  const episodeData = await episodeResponse.json();

  episodeData.results.shift();

  const parsedEpisodeData = episodeData.results.map((episode) => ({
    id: episode.trackId,
    title: episode.trackName,
    description: episode.description,
    episodeUrl: episode.episodeUrl,
    date: dayjs(episode.releaseDate).format("DD/MM/YYYY"),
    contentType: episode.episodeContentType,
    fileExtension: episode.episodeFileExtension,
    duration: dayjs.duration(episode.trackTimeMillis).asMinutes().toFixed(2),
  }));

  const podcastDescription = await parseDescriptionFromFeed(
    podcastData?.feedUrl
  );

  const details = {
    id: podcastData.collectionId,
    title: podcastData.collectionName,
    author: podcastData.artistName,
    image: podcastData.artworkUrl600,
    description: podcastDescription ?? "",
    episodesCount: podcastData.trackCount,
    episodeList: parsedEpisodeData,
  };

  saveToLocalStorage(STORAGE_KEY, details);
  podcast.set(details);
};

const getFromStorage = (STORAGE_KEY) => {
  podcast.set(getFromLocalStorage(STORAGE_KEY));
};

export const fetchPodcast = async (podcastId) => {
  const STORAGE_KEY = `podcast-${podcastId}`;

  const storageIsExpired = checkIfExpired(STORAGE_KEY);

  if (storageIsExpired) {
    await fetchAndStore(podcastId, STORAGE_KEY);
  } else {
    getFromStorage(STORAGE_KEY);
  }
};
