<script>
  import HeaderLayout from "./HeaderLayout.svelte";
  import LeftBar from "../components/LeftBar.svelte";
</script>

<HeaderLayout>
  <div class="container">
    <LeftBar />
    <slot />
  </div>
</HeaderLayout>

<style>
  .container {
    display: flex;
    margin-top: 2rem;
  }
</style>