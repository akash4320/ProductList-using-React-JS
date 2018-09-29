import axios from 'axios';

const instance =axios.create({
    baseURL:'https://productappreactjs.firebaseio.com/'
});

export default instance;