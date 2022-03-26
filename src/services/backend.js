import axios from "axios";
const baseUrl='https://mock-api-mobile.dev.lalamove.com';
const base="https://jsonplaceholder.typicode.com";
const baseEndPoint="http://196.13.161.229:9002"

export async function  GET_SERVICE(endpoint) {
    const url = baseUrl + endpoint;  
    const sessionId = JSON.parse(localStorage.getItem('token'))
        var config = {
            method: "get",
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionId}`
            }
        };
    try {
        return await fetch(url,config);           
    } catch (error) {
        return error.response;
    }
}


export async function POST_SERVICE(body, endpoint) {
    const url = baseEndPoint + endpoint;  
    const sessionId = JSON.parse(localStorage.getItem('token'))
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionId}`
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      });
      return response.json();
}

export async function  PATCH_SERVICE (endpoint) {
    const url = baseUrl + endpoint;

    try {
        return await axios.patch(url, );
    } catch (error) {
        return error.response;
    }
}

  
export async function  DELETE_SERVICE (endpoint) {
    const url = baseUrl + endpoint;
    try {
        return await axios.delete(url);
    } catch (error) {
        return error.response;
    }
}