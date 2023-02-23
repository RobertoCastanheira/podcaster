<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  import { fetchPodcast, podcast } from "../stores/Podcast";
  
  export let podcastId;
  let podcastDetails = {
    episodesCount: null,
    episodeList: [],
  };
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
  <div>
    
    <p>Episodes: {podcastDetails?.episodesCount}</p>
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
</LeftBarLayout>