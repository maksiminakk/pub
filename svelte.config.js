import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

export default {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		scss: {
			prependData: `
				@use 'src/lib/styles/global.scss' as *;
			`	
		}
	})
};