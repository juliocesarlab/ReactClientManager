import axios from 'axios'

export const app = axios.create({
  baseURL: 'https://nodeclientmanager.herokuapp.com/',
});