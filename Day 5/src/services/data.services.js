import axios from 'axios';

export let dataServiceObj = 
{
    getAllDetails
};

let url = "http://localhost:3500/users";

function getAllDetails()
{
    return axios.get(url);
}