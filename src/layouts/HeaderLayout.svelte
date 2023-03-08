<script>
  import Header from '../components/Header.svelte';
  import Suspense from '../components/Suspense.svelte';
</script>

<Header />
<Suspense>
  <slot />
</Suspense>