<script>
  import { Link } from "svelte-routing";

  export let podcast;
</script>

<Link to="/podcast/{podcast.id}">
  <card>
    <img src={podcast.image} alt={podcast.name} />
    <div class="shadow">
      <p class="name">{podcast.name}</p>
      <span class="author">Author: {podcast.author}</span>
    </div>
  </card>
</Link>

<style>
  card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10rem;
    margin: 1rem;
  }

  img {
    border-radius: 50%;
    width: 5rem;
    height: auto;
    z-index: 1;
    margin-bottom: -2rem;
  }

  .shadow {
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
    padding: .5rem;
    padding-top: 2.5rem;
    text-align: center;
    width: 100%;
  }

  .name {
    font-size: .8rem;
    margin-bottom: .1rem;
    color: hsl(205deg, 16%, 77%);
  }

  .author {
    margin-top: 0;
    font-size: .6rem;
    color: hsl(205deg, 16%, 77%);
  }
</style>