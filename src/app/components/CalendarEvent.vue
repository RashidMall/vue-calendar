<template>
    <div class="day-event" :style="getEventBackgroundColor">
        <div>
            <span class="text-center details">{{ event.details }}</span>
            <div class="text-center icons">
                <i class="fas fa-pen-square edit-icon"></i>
                <i class="fas fa-trash-alt delete-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarEvent',
    props: ['event', 'day'],
    computed: {
        getEventBackgroundColor(){
            const colors = ['#3D9970', '#7FDBFF', '#01FF70', '#FF851B', '#AAAAAA', '#DDDDDD', '#F012BE', '#FF4136', '#FFDC00', '#2ECC40', '#39CCCC'];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return `background-color: ${randomColor}`;
        }
    }
}
</script>


<style lang="scss" scoped>
.day-event {
    background-color: #cbe7aa;
    margin-top: 6px;
    margin-bottom: 6px;
    display: block;
    color: #1a1a1b;
    padding: 5px;
    .details {
        display: block;
    }
    .fas {
        padding: 2px;
    }
    input {
        background: none;
        border: 0;
        border-bottom: 1px solid #ffffff;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
}
</style>

