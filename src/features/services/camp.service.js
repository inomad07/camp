import axios from 'axios';
import config from '../config/api.config';

const api = `${config.protocol}://${config.host}/api/v1/listings`;


const headers = {
    headers: {
        'Content-Type': `application/json`,
    }
};

function getAll() {
    return axios.get(`${api}`, headers)
        .catch(err => console.log(err));
}

function getSeveralCamps(number) {
    return axios.get(`${api}?size=${number}`, headers)
        .catch(err => console.log(err));
}



export default {
    getAll,
    getSeveralCamps
};
