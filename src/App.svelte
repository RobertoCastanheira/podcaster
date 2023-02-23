<script>
  import { Router, Route } from "svelte-routing";

  import MainView from './views/MainView.svelte';
  import PodcastDetailsView from './views/PodcastDetailsView.svelte';
  import EpisodeDetailsView from './views/EpisodeDetailsView.svelte';
</script>

<Router url="">
  <Route path="/podcast/:podcastId/episode/:episodeId" component="{EpisodeDetailsView}" />
  <Route path="/podcast/:podcastId" component="{PodcastDetailsView}" />
  <Route path="/" component="{MainView}" />
</Router>

<style>
</style>
