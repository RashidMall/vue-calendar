<template>
    <div class="day-event">
        <div>
            <span class="text-center details">Get Groceries</span>
            <div class="text-center icons">
                <i class="fas fa-pen-square edit-icon"></i>
                <i class="fas fa-trash-alt delete-icon"></i>
            </div>
        </div>
    </div>
</template>

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
    .icons .fas {
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

