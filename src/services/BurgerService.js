import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fcf2c.firebaseio.com/'
});

export default instance;

