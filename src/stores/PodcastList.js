import { writable } from "svelte/store";
import fetch from "cross-fetch";

export const podcastList = writable([]);

const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const fetchPodcasts = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const podcastData = data.feed.entry;
  console.log(podcastData);
  const parsedPodcasts = podcastData.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    name: podcast["im:name"].label,
    author: podcast["im:artist"].label,
    image: podcast["im:image"][2].label,
    url: podcast.link.attributes.href,
  }));

  podcastList.set(parsedPodcasts);
};
