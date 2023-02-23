<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import { podcast } from "../stores/Podcast";

  export let loading;
  
  let podcastDetails;

  onMount(() => {
    podcast.subscribe((value) => {
      podcastDetails = value;
    });
  });
</script>

<div class="left-bar" aria-busy={loading}>
  <div class="card">
    <Link to={`/podcast/${podcastDetails?.id}`}>
      <img src={podcastDetails?.image} alt={podcastDetails?.title} />
    </Link>
    <hr />
    <Link to={`/podcast/${podcastDetails?.id}`}>
      <h3>{podcastDetails?.title}</h3>
    </Link>
    <p>
      <i>by</i>: <Link to={`/podcast/${podcastDetails?.id}`}
        >{podcastDetails?.author}</Link
      >
    </p>
    <hr />
    <p>Description:</p>
    <p>{podcastDetails?.description}</p>
  </div>
</div>

<style>
  .left-bar {
    min-width: 12rem;
  }

  .card {
    padding: 1rem;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }

  img {
    width: 10rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }

  p {
    font-size: 0.8rem;
  }
</style>
