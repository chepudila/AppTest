<template>
    <div class="modal" @click="$emit('onClose')">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Modal",
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: indianred;
    padding: 1em;
    border-radius: 1em;
}
</style>
