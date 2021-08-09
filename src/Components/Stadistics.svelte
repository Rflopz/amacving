<script>
    import Github from './Github.svelte';
    import GlassCard from './UI/GlassCard.svelte'
</script>

<div class="mt-5 grid md:grid-cols-2 sm:grid-cols-1 gap-4">

    <GlassCard title="Github" class="col-span-2" >
        <Github />
    </GlassCard>

    <GlassCard title="LinkedIn">
        <p>
            LinkedIn content
        </p> 
    </GlassCard>

    <GlassCard title="Youtube" >
        <p>
            Youtube content
        </p> 
    </GlassCard>

</div>