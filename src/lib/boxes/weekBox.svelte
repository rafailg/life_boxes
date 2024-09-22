<script lang="ts">
    import { get } from "svelte/store";
    import { addWeeks, formatDate } from "../../dateHelpers";
    import { dateOfBirthString } from "../../stores";

    export let isPast: boolean = false;
    export let week: number = 0;
    let formattedDate = ""

    function calcualteDate(){
        const dateOfBirthStoreValue = get(dateOfBirthString)
        if(!dateOfBirthStoreValue) return;
        const dateOfBirth = new Date(dateOfBirthStoreValue)
        let startDateForWeek = addWeeks(dateOfBirth, week)
        formattedDate = formatDate(startDateForWeek)
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="w-3 h-3 bg-gray-800 rounded-sm m-1 relative group" class:bg-green-400={!isPast} on:mouseover={calcualteDate}>
    <!-- Parent box -->
    <div class="absolute hidden group-hover:block bg-gray-800 
    rounded-md top-full left-1/2 transform -translate-x-1/2 mt-1
    text-white z-50 p-3 w-fit whitespace-nowrap text-center">
        Week {week}
        <div>{formattedDate}</div>
    </div>
</div>

