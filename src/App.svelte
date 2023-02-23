<script>
  import Router from 'svelte-spa-router';

  import MainView from './views/MainView.svelte';
  import PodcastDetailsView from './views/PodcastDetailsView.svelte';
  import EpisodeDetailsView from './views/EpisodeDetailsView.svelte';

  const routes = {
    '/': MainView,
    '/podcast/:podcastId': PodcastDetailsView,
    '/podcast/:podcastId/episode/:episodeId': EpisodeDetailsView,
  };
</script>

<Router {routes} />

<style>
</style>
