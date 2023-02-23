import { writable } from "svelte/store";
import fetch from "cross-fetch";
import dayjs from "dayjs";

export const podcast = writable({});

const JSONP_URL = "https://cors-anywhere.herokuapp.com/";

const URL = JSONP_URL + "https://itunes.apple.com/lookup?id=";

export const fetchPodcast = async (podcastId) => {
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
    episodeUrl: `${URL}${podcastData.collectionId}&entity=podcastEpisode&attribute=assetURL`,
    date: dayjs(episode.releaseDate).format("DD/MM/YYYY"),
    //TODO: duration:
  }));

  console.log({ podcastData });

  const details = {
    id: podcastData.collectionId,
    title: podcastData.collectionName,
    author: podcastData.artistName,
    image: podcastData.artworkUrl600,
    // TODO: description
    description: "",
    episodesCount: podcastData.trackCount,
    episodeList: parsedEpisodeData,
  };

  podcast.set(details);
};
