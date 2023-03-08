<script>
  import { onMount } from "svelte";
  import { podcastList, fetchPodcasts } from "../stores/PodcastList.js";
  import HeaderLayout from "../layouts/HeaderLayout.svelte";
  import PodcastThumbnail from "../components/PodcastThumbnail.svelte";

  let podcasts = [];
  $: filteredPodCasts = podcasts;

  onMount(async () => {
    await fetchPodcasts();
    podcastList.subscribe((value) => {
      podcasts = value;
    });
  });

  const filterPodcasts = (event) => {
    const filter = event.target.value.toLowerCase()

    filteredPodCasts = podcasts.filter((podcast) => {
      if (podcast.name.toLowerCase().includes(filter)) return podcast;
      if (podcast.author.toLowerCase().includes(filter)) return podcast;
    })
  }
</script>

<HeaderLayout>
  <div class="search container">
    <div id="podcast-count" class="count">{filteredPodCasts.length}</div>
    <input id="podcast-search" type="text" placeholder="Filter podcasts..." on:input={filterPodcasts}>
  </div>
  <div class="podcasts container" id="podcast-container">
    {#each filteredPodCasts as podcast}
      <PodcastThumbnail {podcast} />
    {/each}
  </div>
</HeaderLayout>

<style>
  .search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2rem;
  }

  input {
    width: 10rem;
    height: 2rem;
    margin: 0;
  }

  .count {
    width: 2rem;
    text-align: center;
    border-radius: 5px;
    background-color: green;
    margin-right: 1rem;
  }
  .podcasts {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
</style>
