<script>
    
    import GithubIcon from 'svelte-material-icons/GithubCircle.svelte'
    import YoutubeIcon from 'svelte-material-icons/Youtube.svelte'
    import LinkedinIcon from 'svelte-material-icons/LinkedinBox.svelte'

    import IconButton from './IconButton.svelte'
</script>


<div class="flex items-center justify-around gap-5">
            
    <IconButton Icon={YoutubeIcon} size='30px' color="#bb0000" href="https://www.youtube.com/channel/UCmKn9VxE_4qEj8FgY_aHx_w" />
    <IconButton Icon={LinkedinIcon} size='27px' color="#0077b5" href="https://www.linkedin.com/in/rafaelflc/" />
    <IconButton Icon={GithubIcon} size="28px" href="https://github.com/devrafael" />

    <span class="text-xl -mt-1 text-gray-500">|</span>

    <slot></slot>

</div>