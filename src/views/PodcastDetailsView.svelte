<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  import { fetchPodcast, podcast } from "../stores/Podcast";
  
  export let podcastId;
  let podcastDetails = {};
  let loading;


  onMount(async () => {
    loading = true;
    await fetchPodcast(podcastId);
    podcast.subscribe((value) => {
      podcastDetails = value;
      loading = false;
    })
  })
</script>

<LeftBarLayout {loading}>
  <div class="card" aria-busy={loading}>   
    <div class="header shadow"> 
      <p>Episodes: {podcastDetails?.episodesCount}</p>
    </div>
    <div class="shadow"> 
      <table>
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
              <td><Link to={`/podcast/${podcastId}/episode/${episode.id}`}>{episode.title}</Link></td>
              <td>{episode.date}</td>
              <td>{episode?.duration}</td>
            </tr>  
          {/each}
        </tbody>
      </table> 
    </div>
  </div>
</LeftBarLayout>

<style>
  .card {
    width: 100%;
    margin-left: 2rem;
  }

  .header {
    margin-bottom: 1rem;
  }

  .shadow {
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  }

  td {
    font-size: .8rem;
  }
</style>