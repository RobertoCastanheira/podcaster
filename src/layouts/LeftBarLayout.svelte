<script>
  import HeaderLayout from "./HeaderLayout.svelte";
  import LeftBar from "../components/LeftBar.svelte";
</script>

<HeaderLayout>
  <LeftBar />
  <slot />
</HeaderLayout>