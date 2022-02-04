<template>
    <div class="vacancy">
        <div class="vacancy__title">
            <h4>{{ vacancy.proftitle }}</h4>
        </div>
        <div class="vacancy__body">
            <button @click="isShowModal = true">Откликнуться</button>
        </div>
        <Modal v-if="isShowModal" @onClose="isShowModal = false">
            <span>Модальное окно</span>
        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/Common/Modal/Modal.vue";

export default {
    name: "Vacancy",
    components: {
        Modal,
    },
    props: {
        vacancy: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            isShowModal: false,
        };
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
.vacancy {
    border: 1px solid white;

    .vacancy__title {
        text-align: center;
    }

    .vacancy__body {
        button {
            cursor: pointer;
            width: 100%;
        }
    }
}
</style>
