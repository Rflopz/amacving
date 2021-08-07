<script>
    export let Icon;
    export let href = '';
    export let size = '32px'
    export let m = 'mx-2'
    export let color = 'currentColor'

</script>

<a {href} target="_blank" on:click class="{m} {color} text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
    <Icon {size} {color}/>
</a>