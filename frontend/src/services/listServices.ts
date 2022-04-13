import axios from "axios";

const baseUrl = 'api/lists';

export const getAllLists = async () => {
    const request = await axios.get(baseUrl);
    console.log(request.data);
    
    
    return request.data;
};

const createList = () => {};

export const getUserListIds = async () => {
    
    const user = window.localStorage.getItem('loggedW2WUser');
    if (user === null) {return null}
    
    
    const token = `bearer ${JSON.parse(user).token}`;
    const config = {
        headers: { Authorization: token },
    }

    const request = await axios.get('api/users/', config);
    console.log(request.data.lists);
    return request.data.lists;
};

export const getListContents = async (list_id : any) => {
    const request = await axios.get(`${baseUrl}/${list_id}`);
    return request.data;
};


const updateList = () => {};

