<template>
    <div id="calendar-week" class="container">
        <div class="row">
            <CalendarDay v-for="day in sharedState.seedData"
                :key="day.id"
                :day="day"
            />
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CalendarDay from './CalendarDay.vue';

export default {
    name: 'CalendarWeek',
    data() {
        return {
            sharedState: store.state
        }
    },
    components: {
        CalendarDay
    }
}
</script>

<style lang="scss" scoped>
#calendar-week {
    margin-bottom: 40px;
    .column {
        padding: 0 0 0 0;
    }
}
</style>