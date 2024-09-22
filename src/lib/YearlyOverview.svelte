<script lang="ts">
    import { get } from "svelte/store";
    import { age } from "../stores";
    
    const lifeExpectancy = 74

    function verifyAge(){
        if(get(age) > 99){
            age.set(99);
        }else if (get(age) < 0){
            age.set(0);
        }
    }
</script>

<div class="flex flex-col">
    <label class="input input-bordered flex items-center gap-2 w-fit self-center">
        Age:
        <input type="number" class="grow" min="0" max="99" bind:value={$age} on:input={verifyAge}/>
    </label>
    
    {#if $age < 1}
        <div class="mt-5 text-lg self-center select-none">Enter your age to get started.</div>
    {:else}
        <div class="text-center select-none my-5">Life expectancy: 74</div>

        <div class="w-fit m-5 shadow-md rounded-md self-center grid md:grid-cols-10 grid-cols-5 bg-white">
            {#each {length: $age} as _, i}
                <div class="m-3 p-3 rounded-md bg-gray-900 text-white w-12 h-12 select-none shadow-md text-center">{i + 1}</div>
            {/each}

            {#if $age < lifeExpectancy}
                {#each {length: lifeExpectancy - $age} as _, i}
                    <div class="m-3 p-3 rounded-md bg-green-400 text-black shadow-md w-12 h-12 select-none text-center">{i + $age + 1}</div>
                {/each}
            {/if}
        </div>
    {/if}
</div>