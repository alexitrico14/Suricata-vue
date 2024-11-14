<template>
    <div>
        <router-link
            class="btn btn-primary"
            to='/'>Volver al inicio</router-link>
    </div>
</template>
<style scoped>
    .btn{
        background-color: var(--btn-color);
        border: var(--btn-color);
        transition: all 0.5s ease;
    }
    .btn:hover{
        background-color: white;
        color: var(--btn-color);
    }
</style>