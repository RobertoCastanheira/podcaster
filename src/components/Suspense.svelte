<script>
  import { Link } from "svelte-routing";
  import { isLoading } from "../stores/LoadingStore";
  import { hasError } from "../stores/ErrorStore";
</script>

{#if $isLoading}
  <div class="loading" aria-busy="{$isLoading}">
  </div>
{:else if $hasError}
  <div class="error">
    <p>Something went wrong. Please try again later.</p>
    <p><Link to="/">Home</Link></p>
  </div>
{:else}
  <slot />
{/if}

<style>
  .loading {
    width: 100%;
    padding-top: 40vh;
  }

  .error {
    padding-top: 20vh;
    width: 100%;
    text-align: center;
  }
</style>
