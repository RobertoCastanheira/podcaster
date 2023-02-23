<script>
  import { Link } from "svelte-routing";
  import LeftBarLayout from "../layouts/LeftBarLayout.svelte";
  export let podcastId;
</script>

<LeftBarLayout>
  <div>
    (podcast details)
    <Link to="/podcast/1/episode/1">to: episode details</Link>
    <p>Podcast details</p>
  </div>
</LeftBarLayout>