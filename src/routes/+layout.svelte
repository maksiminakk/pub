<script>
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="app">
	
	<div class="wrapper">
		<Header />
		<main>
			{@render children()}
		</main>
		<Footer/>
	</div>

</div>

<style>
	/* @font-face {
    font-family: 'NunitoSans';
    src: url('../fonts/NunitoSans10pt-Regular.woff2') format('woff2'),
        url('../fonts/NunitoSans10pt-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'NunitoSans';
    src: url('../fonts/NunitoSans10pt-Bold.woff2') format('woff2'),
        url('../fonts/NunitoSans10pt-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
} */

@font-face {
    font-family: 'InterTight';
    src: url('../fonts/InterTight-Bold.ttf') format('ttf');
        /* url('../fonts/InterTight-Bold.woff') format('woff'); */
    font-weight: 700;
    font-style: normal;
}
</style>
