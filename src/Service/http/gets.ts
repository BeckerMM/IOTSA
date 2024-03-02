import exp from "constants";
import api from "./axios"

export const get = async (url: string) => {
    try {
        const response = await  api.get("leiteenvasado");
        return response.data;
    } catch (error) {
        return error;
    }
};

export const getmiguel = async (url: string) => {
    try {
        const response = await  api.get("becker");
        return response.data;
    } catch (error) {
        return error;
    }
}

