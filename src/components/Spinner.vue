<template>
    <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid rgb(238, 237, 237);
    margin: 30px auto;
    border-top-color: crimson;
    animation: spin 1s linear infinite;
}
@keyframes spin{
    to{
        transform: rotate(360deg);
    }
}
</style>