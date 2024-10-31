<script>
	import Promotion from "../../lib/components/sections/Promotion.svelte";
	import Products from "../../lib/components/sections/Products.svelte";
  </script>

<svelte:head>
	<title>Menu</title>
	<meta name="description" content="Menu" />
</svelte:head>
  
  <div class="wrapper__body">
	<Promotion hideDescription={true}/>
	<Products/>
  </div>
  <style>
  </style>
  
