import { store } from "../store";
import axios from "axios";
import Vacancy from "../dto/Vacancy";

export function getAllVacancies() {
    axios
        .get("https://gsr-rabota.ru/api/v2/GetAllVacancies")
        .then(function (response) {
            store.commit(
                "SET_VACANCIES",
                Array.from(response.data, (vacancyInfo) => new Vacancy(vacancyInfo))
            );
        })
        .catch(function (error) {
            console.log(error);
        });
}
