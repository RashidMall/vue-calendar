<template>
    <div id="app">
        <CalendarWeek />
        <CalendarEntry />
    </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue'; 
export default {
    name: 'App',
    components: {
        CalendarWeek,
        CalendarEntry
    }
}
</script>
<style lang="scss" scoped>
html, body {
    height: 100%;
}
#app {
    /* SCSS for app */
}
</style>


