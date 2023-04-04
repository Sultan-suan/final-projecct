import axios from "axios";


const $api = axios.create({
    baseURL: "https://cards-nya-back-production.up.railway.app/2.0",
    headers: {
        "Content-Type": "application/json"
    }
})

export class AuthService {
    static registration(email: string, password: string) {
        return $api.post('auth/register', {email, password})
    }

    static login(email: string, password: string) {
        return $api.post('auth/login', {email, password})
    }
}