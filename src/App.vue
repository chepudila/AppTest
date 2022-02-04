<template>
    <div class="app">
        <div class="app__wrapper-body">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
$bg-color: #383838;

.app {
    min-height: 100vh;
    background-color: $bg-color;
    display: flex;

    .app__wrapper-body {
        width: 100%;
        margin: 1em;
        padding: 1em;
        border-radius: 0.3em;
        background: $bg-color;
        box-shadow: inset 0.3em 0.3em 0.6em #303030, inset -0.3em -0.3em 0.6em #404040;
    }
}
</style>
