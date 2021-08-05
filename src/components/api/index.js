import axios from 'axios';

export default function createAPI(){
    return axios.create({
        baseURL: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf'
        }
    });
}