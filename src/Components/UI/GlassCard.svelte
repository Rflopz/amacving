<script>
    export let title = ''
</script>

<div class="glass p-2 shadow-md rounded-md {$$props.class}">

    <div class="flex flex-col">
        <h3 class="text-xl text-center text-blue-500 dark:text-sky-400 my-1">
            {title}
        </h3>

        <slot></slot>
    </div>

</div>


<style>
    .glass:before {
        box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
        /* filter: blur(10px); */
        background: inherit;
    }
    .glass {
        background-color: rgba(255, 255, 255, .2);   
    }

</style>