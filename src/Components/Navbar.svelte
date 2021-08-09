<script>
    import theme from '../store/Theme'

    import ThemeLightDark from 'svelte-material-icons/Brightness4.svelte'
    import DownloadIcon from 'svelte-material-icons/Download.svelte'
    
    import Social from './UI/SocialButtons.svelte'

	const toggleTheme = () => {
		theme.set( $theme === 'dark' ? 'light' : 'dark' )
        localStorage.theme = $theme;
	}

    const downloadCV = () => {
        console.log( 'TODO: donwload pdf file ' )
    }


</script>

<nav class="flex items-center justify-between mb-14">
    <h1 class="text-xl text-gray-900 dark:text-gray-400 font-bold">Rafael López C.</h1>

    <Social>
        <span on:click={ downloadCV } 
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer mx-1">
                <DownloadIcon size='27px'/>
        </span>

        <span on:click={ toggleTheme } 
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer">
                <ThemeLightDark size='24px' />
        </span>
    </Social>
</nav>