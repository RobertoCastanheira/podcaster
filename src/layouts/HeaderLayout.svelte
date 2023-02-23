<script>
  import Header from '../components/Header.svelte';
  export let loading = false;
</script>

<Header {loading}/>
<slot />