<script>
	import theme from './store/theme'
	import { onMount } from 'svelte'

	import Navbar from './components/navbar.svelte'

	onMount( async () => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) )
            theme.set( 'dark' )
        else 
            theme.set( 'light' )	
	})

</script>

<div class={$theme}>

    <div class="absolute p-4 w-screen h-full bg-gray-300 dark:bg-gray-600">
		<Navbar />
	</div>

</div>


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
	  margin: 0; 
	  padding: 0;
  }
</style>