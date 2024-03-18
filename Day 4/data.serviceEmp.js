import axios from 'axios';

export let dataServiceObj = 
{
    getAllDetails,
    getDetailById,
    addDetail,
    updateDetail,
    deleteDetail
};



let url = "http://localhost:3500/emps";

function getAllDetails()
{
    return axios.get(url);
}


function addDetail(empObj)
{
    return axios.post(url, empObj);
}

function deleteDetail(empno)
{
    return axios.delete(url + empno);
}


function getDetailById(empno)
{
    return axios.get(url + empno);
}

function updateDetail(empObj)
{
    return axios.put(url + empObj.empno, empObj);
}