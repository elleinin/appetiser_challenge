import axios from 'axios'

axios.defaults.baseURL = 'https://api.baseplate.appetiserdev.tech/api/v1/auth/';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');