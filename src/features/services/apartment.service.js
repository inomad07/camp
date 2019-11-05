import axios from 'axios';
import config from '../config/api.config';
import { handleApiResponse } from "../helpers/apiMiddleware";

const api = `${config.protocol}://${config.host}/api/v1/listings`;


const headers = {
    headers: {
        'Content-Type': `application/json`,
    }
};

function getAll() {
    return axios.post(`${api}/get_all`, {}, headers);
}

function add(apartment) {
    return axios.post(`${api}/add`, apartment, headers);
}

function edit(data) {
    return axios.post(`${api}/update`, data, headers);
}

function remove(id) {
    return axios.post(`${api}/delete`, {id}, headers);
}

export default {
    getAll: handleApiResponse(getAll),
    add: handleApiResponse(add),
    edit: handleApiResponse(edit),
    remove: handleApiResponse(remove),
};
