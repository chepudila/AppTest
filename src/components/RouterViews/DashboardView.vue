<template>
    <div class="dashboard-view">
        <Vacancies :vacancies="GET_VACANCIES" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vacancies from "../Common/Vacancies/Vacancies.vue";

export default {
    name: "DashboardView",
    components: {
        Vacancies,
    },
    computed: {
        ...mapGetters(["GET_VACANCIES"]),
    },
};
</script>
