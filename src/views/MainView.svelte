<script>
  import { onMount } from "svelte";
  import { podcastList, fetchPodcasts } from "../stores/PodcastList.js";
  import HeaderLayout from "../layouts/HeaderLayout.svelte";
  import PodcastThumbnail from "../components/PodcastThumbnail.svelte";

  let podcasts = [];
  let loading;

  onMount(async () => {
    loading = true;
    await fetchPodcasts();
    podcastList.subscribe((value) => {
      podcasts = value;
      loading = false;
    });
  });
</script>

<HeaderLayout loading={loading}>
  <div class="podcasts container">
    {#each podcasts as podcast}
      <PodcastThumbnail {podcast} />
    {/each}
  </div>
</HeaderLayout>

<style>
  .podcasts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
</style>
