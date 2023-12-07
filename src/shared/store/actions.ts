import { LOGOUT_USER, LogOutUser } from "./types";

export function logOutUser(): LogOutUser {
    return {
        type: LOGOUT_USER
    }
};