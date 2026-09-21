import {ROLES} from "./config.js";

const user = {
    name: "John",
    role: ROLES.USER
};

const admin = {
    name: "Bill",
    role: ROLES.ADMIN
};

export function getAuthenticatedUser() {
    return admin;
}

export function getUserByName(userName) {
    if (userName === user.name) {
        return user;
    }

    if (userName === admin.name) {
        return admin;
    }

    return {
        name: userName,
        role: "GUEST"
    };
}