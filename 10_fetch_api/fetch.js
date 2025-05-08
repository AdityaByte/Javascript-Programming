// The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.
// Fetch api returns a promise which can be either resolved or rejected.
// Note (most important) - Even if the server response is an HTTP error status it comes in the resolve promise.

async function makeRequest(){
    const url = "http://localhost:8080/goapi"
    const data = {
        username: "aditya",
        password: "pawar"
    }
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    })

    if (response.status == 200) {
        const json_response = await response.json()
        console.log(json_response["response"]);
        console.log(typeof json_response);
    } else {
        console.log(response.status);
    }
}

makeRequest()