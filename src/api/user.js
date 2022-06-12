

export function login() {
    var name = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    fetch(`http://localhost:3009/api/User/` + name + "/" + password)
        .then(response => {
            // console.log(name);
            // console.log(password);
            if (response.ok && response.status == 200) {
                return response.json()
            }
            else {
                alert("לא נמצא משתמש בשם זה:");
                throw new Error()
            }
        })
        .then(data => {

            if (data != "") {
                console.log(data, "data");
                alert("welcome back" + " " + data.fullName + "😊");
                sessionStorage.setItem("user", JSON.stringify(data))
                console.log(data);
            }
            else {
                alert("לא נמצא משתמש בשם זה:");
            }
        }).catch((e) => {
            console.log(e)
        })
};
export function signIn() {
    let user = {
        fullName: document.getElementById("userName").value,
        email: '',
        password: document.getElementById("password").value,
        Address: {}
    };

    fetch(`http://localhost:3000/api/User/`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user),
        }).then(response => response.json())
        .then(data => {
            console.log(user.fullName);
            console.log(user.password);
            alert('hello to :' + JSON.stringify(data.fullName));

        }).catch(e => alert("נכשל!!"));
}
export function getAllUsers(){


    fetch(`http://localhost:3009/api/User/`)
    .then(response => {
        if (response.ok && response.status == 200) {
            return response.json()
        }
        else {
            alert("לא נמצא משתמש בשם זה:");
            throw new Error()
        }
    })
    // .then(data => {

    //     if (data != "") {
    //         console.log(data, "data");
    //         alert("welcome back" + " " + data.fullName + "😊");
    //         sessionStorage.setItem("user", JSON.stringify(data))
    //         console.log(data);
    //         //  window.location.href = "passPage.html";
    //     }
    //     else {
    //         alert("לא נמצא משתמש בשם זה:");
    //     }
    // })
    .catch((e) => {
        console.log(e)
    })
}