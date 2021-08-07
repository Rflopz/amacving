<script>
    import theme from '../store/theme'
    import Social from './UI/social.svelte'

	const toggleTheme = () => {
		theme.set( $theme === 'dark' ? 'light' : 'dark' )
        localStorage.theme = $theme;
	}


</script>

<nav class="flex items-center justify-between">
    <h1 class="text-xl text-gray-900 dark:text-gray-400 font-bold">Rafael López C.</h1>

    <Social/>
</nav>