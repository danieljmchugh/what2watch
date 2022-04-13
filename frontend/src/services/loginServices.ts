import axios from "axios";

const baseUrl = 'api/login';

export const login = async (credentials : any) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
}

export const register = async (credentials : any) => {
    const response = await axios.post('api/register', credentials);
    console.log(response.data);
    return response.data;
}
