<script>
  import { Link } from "svelte-routing";
  export let loading = false;
</script>

<header class="container">
  <Link to="/" class="logo">Podcaster</Link>
  <span class="header-loading" aria-busy={loading} />
</header>

<style>
  header {
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
</style>