<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  import { fetchPodcast, podcast } from "../stores/Podcast";

  export let podcastId;
  let podcastDetails = {};
  let loading = true;

  onMount(async () => {
    await fetchPodcast(podcastId);
    podcast.subscribe((value) => {
      podcastDetails = value;
      loading = false;
    });
  });
</script>

<LeftBarLayout {loading}>
  <div class="card" aria-busy={loading}>
    {#if !loading}
      <div class="podcast-header shadow">
        <p>
          Episodes: <span class="episode-count"
            >{podcastDetails?.episodesCount}</span
          >
        </p>
      </div>
      <div class="shadow">
        <table class="episode-table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Date</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            {#each podcastDetails?.episodeList ?? [] as episode}
              <tr>
                <td
                  ><Link to={`/podcast/${podcastId}/episode/${episode.id}`}>
                    <span class="episode-title">{episode.title}</span></Link
                  ></td
                >
                <td>{episode.date}</td>
                <td>{episode?.duration}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
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

  .podcast-header {
    margin-bottom: 1rem;
  }

  .shadow {
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }

  td {
    font-size: 0.8rem;
  }
</style>
