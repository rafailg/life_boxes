<script lang="ts">
    import './fonts.css'
    import YearlyOverview from "./lib/YearlyOverview.svelte";
    import WeeklyOverview from './lib/WeeklyOverview.svelte';
    let weeklyView = false;
</script>

<main class="w-screen h-screen flex flex-col gradient-background">
    <div class="w-fit self-center mt-10 font-bold header select-none">Your Life In Boxes</div>
    
    <label class="swap my-5">
        <input type="checkbox" bind:checked={weeklyView}/>
        <div class="swap-on">Switch to yearly</div>
        <div class="swap-off">Switch to weekly</div>
    </label>
    
    {#if weeklyView}
        <WeeklyOverview></WeeklyOverview>   
    {:else}
        <YearlyOverview></YearlyOverview>
    {/if}
</main>

<style>
    .gradient-background{
        background: rgb(214,212,255);background: linear-gradient(132deg, rgba(214,212,255,1) 0%, rgba(248,236,249,1) 26%, rgba(200,206,251,1) 100%);
    }

    .header{
        font-family: 'Caveat';
        font-size: xx-large;
    }
</style>