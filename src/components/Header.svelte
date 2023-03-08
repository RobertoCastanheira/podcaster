<script>
  import { Link } from "svelte-routing";
  import { isLoading } from "../stores/LoadingStore";
</script>

<header class="container">
  <Link to="/" class="logo">Podcaster</Link>
  <span class="header-loading" aria-busy={$isLoading} />
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