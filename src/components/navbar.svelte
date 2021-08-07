<script>
    import theme from '../store/theme'
    import Social from './UI/social.svelte'
    import ThemeLightDark from 'svelte-material-icons/Brightness4.svelte'
    import IconButton from './UI/IconButton.svelte'

	const toggleTheme = () => {
		theme.set( $theme === 'dark' ? 'light' : 'dark' )
        localStorage.theme = $theme;
	}


</script>

<nav class="flex items-center justify-between">
    <h1 class="text-xl text-gray-900 dark:text-gray-400 font-bold">Rafael López C.</h1>

    <Social>
        <span on:click={ toggleTheme } 
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer">
                <ThemeLightDark size='32px' />
        </span>
    </Social>
</nav>