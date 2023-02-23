import { writable } from "svelte/store";
import fetch from "cross-fetch";
import {
  checkIfExpired,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

export const podcastList = writable([]);

const STORAGE_KEY = "podcast-list";

const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const fetchAndStore = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const podcastData = data.feed.entry;

  const parsedPodcasts = podcastData.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    name: podcast["im:name"].label,
    author: podcast["im:artist"].label,
    image: podcast["im:image"][2].label,
    url: podcast.link.attributes.href,
    description: podcast.summary,
  }));

  saveToLocalStorage(STORAGE_KEY, parsedPodcasts);
  podcastList.set(parsedPodcasts);
};

const getFromStorage = () => {
  podcastList.set(getFromLocalStorage(STORAGE_KEY));
};

export const fetchPodcasts = async () => {
  const storageIsExpired = checkIfExpired(STORAGE_KEY);

  if (storageIsExpired) {
    await fetchAndStore();
  } else {
    getFromStorage();
  }
};
