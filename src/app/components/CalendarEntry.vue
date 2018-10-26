<template>
    <div id="calendar-entry">
        <div class="calendar-entry-note">
            <input type="text" name="" id="" placeholder="New Event" v-model="inputEntry" required>
            <p class="calendar-entry-day">
                Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
            </p>
            <a class="btn btn-primary btn-sm" @click="submitEvent(inputEntry)">Submit</a>
        </div>
        <p class="alert alert-danger" role="alert" v-if="error">You must type something</p>
    </div>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'CalendarEntry',
    data(){
        return {
            inputEntry: '',
            error: false
        }
    },
    computed: {
        titleOfActiveDay(){
            return store.getActiveDay().fullTitle;
        }
    },
    methods: {
        submitEvent(eventDetails){
            if(eventDetails === ''){
                return this.error = true;
            }
            store.submitEvent(eventDetails);
            this.inputEntry = '';
        }
    }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
    /* SCSS for calendar entry */
}
</style>


