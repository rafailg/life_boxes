<script lang="ts">
    import { get } from "svelte/store";
    import { formatDateToInput } from "../dateHelpers";
    import { dateOfBirthString } from "../stores";
    import { onMount } from "svelte";

    const maxAge = 150;
    
    let ageInWeeks = 0;
    let lifeExpectancyInWeeks = 74 * 12 * 4;

    // Called when date control is changed by user
    function verifyDateOfBirth(){
        let dateOfBirthInput = get(dateOfBirthString)
        if(!dateOfBirthInput) return;
        
        const dateOfBirth = new Date(dateOfBirthInput)
        const currentDate = new Date()

        if(dateOfBirth >= currentDate){
            dateOfBirthString.set(null);
            return;
        }

        const minDate = new Date();
        minDate.setFullYear(currentDate.getFullYear() - maxAge)

        if(dateOfBirth < minDate){
            dateOfBirthString.set(null);
            return;
        }

        calculateAgeInWeeks()
    }

    onMount(() => {
        calculateAgeInWeeks()
    })

    function calculateAgeInWeeks(){
        const dateOfBirthInput = get(dateOfBirthString);
        if(!dateOfBirthInput) return;

        const dateOfBirth = new Date(dateOfBirthInput);
        const currentDate = new Date();
        if(dateOfBirth === null) return;
        let differenceInMs = Math.abs(currentDate.getTime() - dateOfBirth.getTime())
        const differenceInDays: number = differenceInMs / (1000 * 60 * 60 * 24);
        ageInWeeks = Math.ceil(differenceInDays / 7);
    }
</script>

<div class="flex flex-col">
    <label class="input w-fit input-bordered flex items-center gap-2 self-center select-none">
        Date of birth: <input type="date" class="grow w-fit" bind:value={$dateOfBirthString} on:change={verifyDateOfBirth}>
    </label>

    {#if dateOfBirthString}
        <div class="text-center select-none my-5">Life expectancy: 74</div>
        <div class="h-fit w-10/12 p-5 flex flex-wrap bg-white rounded-md shadow-md self-center">
            {#each {length:ageInWeeks} as _, i}
                <div class="w-3 h-3 bg-gray-800 rounded-sm m-1"></div>
            {/each}

            {#if ageInWeeks < lifeExpectancyInWeeks}                
                {#each {length: lifeExpectancyInWeeks - ageInWeeks} as _, i}
                    <div class="w-3 h-3 bg-green-400 rounded-sm m-1"></div>
                {/each}
            {/if}
        </div>
    {/if}
</div>