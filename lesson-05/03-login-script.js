//post response in authentication/login
let jsonData = pm.response.json();
pm.environment.set("accessToken", jsonData.data.accessToken);

// Asserting the status code is 201
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

// Asserting the message in the response body
pm.test("Response message is 'Login successful'", function () {
    pm.expect(jsonData.message).to.equal('Login successful');
});

// pre-request script in collection
if (!pm.collectionVariables.get("accessToken")) {
    pm.sendRequest({
        url: 'https://bblib-dev-api.betterbytesvn.cloud/v2/admin/auth/login', 
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: {
            mode: 'raw',
            raw: JSON.stringify({
                username: 'admin@betterbytesvn.com',
                password: '123@123A'
            })
        }
    }, function (err, res) {
        if (err) {
            console.log("Lỗi khi lấy token:", err);
        } else {
            const json = res.json();
            const accessToken = json.data.accessToken; 
            pm.collectionVariables.set("accessToken", accessToken);
            console.log("Đã lấy và set token:", accessToken);
        }
    });
} else {
    console.log("Access token đã tồn tại:", pm.collectionVariables.get("accessToken"));
}