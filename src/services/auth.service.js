const login = (data, callback) => {
    // const request = new Request("https://fakestoreapi.com/auth/login", {
    const request = new Request("http://27.112.79.87:3000/api/v1/auth/login", {
        method: "post",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },

        body: JSON.stringify(data)
    })

    const response = fetch(request);
    console.log(response)
    response.then((response) => response.json())
    .then(function(json){
        // console.log(json.user.fullName)
        callback(true, json)
    })
    .catch(function(error){
        // console.log(error)
        callback(false, "username or password is incorrect")
    })
}

export default login