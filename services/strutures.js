import axios from 'axios';

export default {
  list() {
    return axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/structures')
  },
  detail(id) {
    return axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/structure/${id}`)
  }
}

