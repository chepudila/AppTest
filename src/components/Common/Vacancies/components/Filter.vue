<template>
    <label class="filter">
        <span>
            {{ label }}
        </span>
        <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
            <option v-for="(option, key) in options" :key="key" :value="key">{{ option.verbose }}</option>
        </select>
    </label>
</template>

<script>
export default {
    name: "Filter",
    props: {
        options: {
            type: Object,
            default: () => ({}),
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
.filter {
    width: 15em;
    border: 1px solid white;
    padding: 0.5em;

    select {
        margin-top: 0.2em;
        width: 100%;
    }
}
</style>
