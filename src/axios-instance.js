import axios from 'axios';

const instance=axios.create({
    baseURL:'https://my-burger-9b562.firebaseio.com/'
});

export default instance;