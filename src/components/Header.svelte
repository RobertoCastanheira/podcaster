<script>
  import { Link } from "svelte-routing";
  export let loading = false;
</script>

<header>
  <Link to="/">Podcaster</Link>
  <span aria-busy={loading} />
</header>

<style>
  header {
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
</style>