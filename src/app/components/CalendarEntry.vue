<template>
    <div id="calendar-entry">
        <div class="calendar-entry-note">
            <input type="text" name="" id="" placeholder="New Event">
            <p class="calendar-entry-day">
                Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
            </p>
            <a href="" class="btn btn-primary btn-sm">Submit</a>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'CalendarEntry',
    computed: {
        titleOfActiveDay(){
            return store.getActiveDay().fullTitle;
        }
    },
}
</script>

<style lang="scss" scoped>
#calendar-entry {
    /* SCSS for calendar entry */
}
</style>


