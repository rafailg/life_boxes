<script lang="ts">
    import YearlyOverview from "./lib/YearlyOverview.svelte";
</script>

<main class="w-screen h-screen flex flex-col gradient-background">
    <div class="w-fit self-center text-2xl my-10 font-bold">Life Boxes</div>
    
    <YearlyOverview></YearlyOverview>
</main>

<style>
    .gradient-background{
        background: rgb(214,212,255);background: linear-gradient(132deg, rgba(214,212,255,1) 0%, rgba(248,236,249,1) 26%, rgba(200,206,251,1) 100%);
    }
</style>