<template>
    <div id="calendar-week" class="container">
        <!-- Calendar week -->
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
    /* SCSS for calendar week */
}
</style>