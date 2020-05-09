import { handleLoginResponse } from "../helpers/helpers";

export const authenticationService = {
    login,
    signUp,
}

async function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
    };

    var result = await fetch("", requestOptions)
        .then(handleLoginResponse)
        .then(async (user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user))
            return user;
        });
    return result;
}


async function signUp(form) {
    const requestOptions = {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form
    };

    return await fetch("", requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}