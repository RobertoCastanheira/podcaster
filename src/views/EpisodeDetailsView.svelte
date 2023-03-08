<script>
  import { onMount } from "svelte";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  import { fetchPodcast, podcast } from "../stores/Podcast";
  import { isLoading } from "../stores/LoadingStore";

  export let podcastId;
  export let episodeId;

  let podcastDetails = {};
  let episodeDetails = {};

  onMount(async () => {
    await fetchPodcast(podcastId);
    podcast.subscribe((value) => {
      podcastDetails = value;
    });
  });

  $: episodeDetails = (podcastDetails?.episodeList || []).filter(
    (episode) => episode.id.toString() === episodeId.toString()
  )[0];
</script>

<LeftBarLayout>
  <div class="card shadow" aria-busy={$isLoading}>
    {#if !$isLoading}
      <h1 class="episode-detail-title">{podcastDetails?.title}</h1>
      <p class="episode-detail-description">
        {@html episodeDetails?.description}
      </p>
      <audio class="audio" controls>
        <source
          src={episodeDetails?.episodeUrl}
          type="{episodeDetails?.contentType}/{episodeDetails?.fileExtension}"
        />
      </audio>
    {:else}
      <div class="loading">Loading...</div>
    {/if}
  </div>
</LeftBarLayout>

<style>
  .card {
    width: 100%;
    margin-left: 2rem;
  }

  .shadow {
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }

  .audio {
    width: 100%;
  }

  .loading {
    text-align: center;
  }
</style>
