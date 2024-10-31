<script>
  import Intro from "../lib/components/sections/Intro.svelte";
  import Promotion from "../lib/components/sections/Promotion.svelte";
  import Items from "../lib/components/sections/Items.svelte";
  import HowItWorks from "../lib/components/sections/HowItWorks.svelte";
  import Reservation from "../lib/components/sections/Reservation.svelte";
  import Location from "../lib/components/sections/Location.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="wrapper__body">
  <Intro />
  <Promotion />
  <Items />
  <HowItWorks />
  <Reservation />
  <Location />
</div>

<style>
</style>
