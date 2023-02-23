<script>
  import HeaderLayout from "./HeaderLayout.svelte";
  import LeftBar from "../components/LeftBar.svelte";

  export let loading = false;
</script>

<HeaderLayout {loading}>
  <LeftBar />
  <slot />
</HeaderLayout>