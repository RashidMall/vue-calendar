<template>
    <div class="day col" @click="setActiveDay(day.id)">
        <div class="day-banner text-center">{{ day.abbvTitle }}</div>
        <div class="day-details">
            <div class="day-number">{{ day.id }}</div>
            <CalendarEvent v-for="(event, index) in day.events"
                :key="index"
                :event="event"
                :day="day"
            />
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CalendarEvent from './CalendarEvent.vue';

export default {
    name: 'CalendarDay',
    props: ['day'],
    methods: {
        setActiveDay(dayId){
            store.setActiveDay(dayId);
        }
    },
    components: {
        CalendarEvent
    }
}
</script>

<style lang="scss" scoped>
    .day {
        background-color: #c21a68;
        color: #FFF;
        border-left: 1px solid #8f8f8f;
        border-bottom: 1px solid #8f8f8f;
        font-size: 12px;
        cursor: pointer;
        &:hover {
            background: darken(#eb1e7e, 5%);
        }
        .day-banner {
            background-color: #960e62;
            color: #ffffff;
            padding: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 12px;
            font-weight: 700;
        }
        .day-details {
            padding: 10px;
        }
        &:last-child {
            border-right: 1px solid #8f8f8f;
        }
    }
</style>
