<script>
  import { onMount } from "svelte";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  import { fetchPodcast, podcast } from "../stores/Podcast";
  
  export let podcastId;
  export let episodeId;

  let loading = false;
  let podcastDetails = {};
  let episodeDetails = {}

  onMount(async () => {
    loading = true;
    await fetchPodcast(podcastId)
    podcast.subscribe((value) => {
      podcastDetails = value;
      loading = false;
    })
  })

  $: episodeDetails = (podcastDetails?.episodeList || []).filter(episode => episode.id.toString() === episodeId.toString())[0]
</script>

<LeftBarLayout {loading}>
  <div class="card shadow">
    <h1>{podcastDetails?.title}</h1>
    <p>{episodeDetails?.description}</p>
    <audio class="audio" controls>
      <source src={episodeDetails?.episodeUrl} type="audio/mp3">
    </audio>
  </div>
</LeftBarLayout>

<style>
  .card {
    width: 100%;
    margin-left: 2rem;
  }

  .shadow {
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }

  .audio {
    width: 100%;
  }
</style>