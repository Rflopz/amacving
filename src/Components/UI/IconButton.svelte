<script>
    export let Icon;
    export let href = '';
    export let size = '24px'
    export let m = 'mx-2'
    export let color = 'black'

</script>

<a {href} target={ href !== '' ? "_blank" : '' } on:click class="{m} {color} text-gray-500 dark:text-gray-40">
    <svelte:component this={Icon} {size} {color} />
</a>