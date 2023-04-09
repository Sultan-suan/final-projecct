import axios from "axios";


const $api = axios.create({
    baseURL: "https://cards-nya-back-production.up.railway.app/2.0",
    headers: {
        "Content-Type": "application/json"
    },
})

export class AuthService {
    static async registration(email: string, password: string) {
        return await $api.post('auth/register', {email, password})
    }

    static async login(email: string, password: string, rememberMe: boolean) {
        return await $api.post('auth/login', {email, password, rememberMe})
    }

    static async authMe(token: string) {
        return await $api.post('auth/me', {token})
    }

}