<script>
  import HeaderLayout from "./HeaderLayout.svelte";
  import LeftBar from "../components/LeftBar.svelte";

  export let loading = false;
</script>

<HeaderLayout {loading}>
  <div class="container">
    <LeftBar {loading} />
    <slot />
  </div>
</HeaderLayout>

<style>
  .container {
    display: flex;
    margin-top: 2rem;
  }
</style>