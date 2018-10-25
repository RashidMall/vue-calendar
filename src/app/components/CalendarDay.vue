<template>
    <div class="day col">
        <div class="day-banner text-center">{{ day.abbvTitle }}</div>
        <div class="day-details">
            <div class="day-number">{{ day.id }}</div>
            <div class="day-event">
                <div>
                    <span class="text-center details">Get Groceries</span>
                    <div class="text-center icons">
                        <i class="fa fa-pencil-square edit-icon"></i>
                        <i class="fa fa-trash-o delete-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'CalendarDay',
    props: ['day']
}
</script>
