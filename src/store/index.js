import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            VACANCIES: [],
        };
    },
    mutations: {
        SET_VACANCIES(state, data) {
            state.VACANCIES = data;
        },
    },
    getters: {
        GET_VACANCIES(state) {
            return state.VACANCIES;
        },
    },
});

export { store };
