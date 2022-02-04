<template>
    <div v-if="vacancies.length" class="vacancies">
        <div class="vacancies__filters">
            <Filter :options="regions" :label="'Регион'" v-model="selectedRegionId" />
            <Filter :options="cities" :label="'Город'" v-model="selectedCityId" />
            <Filter :options="organizations" :label="'Организация'" v-model="selectedOrganizatioId" />
        </div>
        <div class="vacancies__body">
            <div class="vacancies__title">
                <span v-text="`Найдено: ${filteredVacancies.length}`" />
            </div>
            <div class="vacancies__items">
                <Vacancy v-for="vacancy in filteredVacancies" :key="vacancy.vacancy_id" :vacancy="vacancy" />
            </div>
        </div>
    </div>
</template>

<script>
import Filter from "./components/Filter.vue";
import Vacancy from "./components/Vacancy.vue";

export default {
    name: "Vacancies",
    components: {
        Filter,
        Vacancy,
    },
    props: {
        vacancies: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            selectedRegionId: "",
            selectedCityId: "",
            selectedOrganizatioId: "",
        };
    },
    computed: {
        regions() {
            return this.getFilterItems(this.vacancies, "region_id", "regionname");
        },
        cities() {
            return this.getFilterItems(this.vacancies, "placeid", "placetitle");
        },
        organizations() {
            return this.getFilterItems(this.vacancies, "clientid", "clientname");
        },
        filteredVacancies() {
            let newFilteredVacancies = this.vacancies.slice();

            if (this.selectedRegionId) {
                newFilteredVacancies = newFilteredVacancies.filter(
                    (vacancy) => vacancy.region_id == this.selectedRegionId
                );
            }

            if (this.selectedCityId) {
                newFilteredVacancies = newFilteredVacancies.filter((vacancy) => vacancy.placeid == this.selectedCityId);
            }

            if (this.selectedOrganizatioId) {
                newFilteredVacancies = newFilteredVacancies.filter(
                    (vacancy) => vacancy.clientid == this.selectedOrganizatioId
                );
            }

            return newFilteredVacancies;
        },
    },
    methods: {
        getFilterItems(array, idField, nameField) {
            let newItems = {};

            array.forEach((item) => {
                newItems[item[idField]] ||= {
                    verbose: item[nameField],
                };
            });

            return newItems;
        },
    },
};
</script>

<style lang="scss" scoped>
.vacancies {
    display: flex;
    flex-direction: row;

    .vacancies__filters {
        display: flex;
        flex-direction: column;
        margin-right: 1em;

        .filter:not(:last-child) {
            margin-bottom: 0.5em;
        }
    }

    .vacancies__body {
        display: flex;
        flex-direction: column;
        
        .vacancies__title {
            text-align: center;
            margin-bottom: 1em;
        }

        .vacancies__items {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            margin-right: -1em;

            .vacancy {
                width: calc(100% / 3 - 1em);
            }
        }
    }
}
</style>
