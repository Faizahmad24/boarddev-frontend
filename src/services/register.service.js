const register = (data, callback) => {
    const request = new Request("http://27.112.79.87:3000/api/v1/user", {
        method: "post",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify(data)
    })

    const response = fetch(request)
    console.log(response)
    response.then((response) => response.json())
    .then(function(json){
        console.log(json)
        callback(true, json)
    })
    .catch(function(error) {
        console.log(error)
        callback(false, error)
    })
}

export default register