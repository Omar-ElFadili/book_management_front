import axios from "axios";


const apiService = axios.create({
    baseURL: 'http://localhost:8080/api/',
  });
  
  export default apiService;