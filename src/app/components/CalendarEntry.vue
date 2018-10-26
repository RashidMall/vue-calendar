<template>
    <form>
        <div class="form-group bg-light p-3 border border-primary rounded">
            <input type="text" class="rounded" placeholder="New Event" v-model="inputEntry" required>
            <p>
                Day of event: <span class="font-weight-bold">{{ titleOfActiveDay }}</span>
            </p>
            <a class="btn btn-primary btn-sm" @click="submitEvent(inputEntry)">Add</a>
        </div>
        <p class="alert alert-danger" role="alert" v-if="error">You must type something</p>
    </form>
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
</style>


