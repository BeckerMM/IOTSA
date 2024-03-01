import axios from 'axios';


axios.create({
    baseURL: 'http://localhost:3000 ',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    }); 


    const a = 0