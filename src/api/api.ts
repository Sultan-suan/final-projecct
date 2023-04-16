import axios from "axios";
import {SearchParamsType, SearchReducerStateType} from "../redux/search";

const $api = axios.create({
    baseURL: "https://cards-nya-back-production.up.railway.app/2.0",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

export class AuthService {
    static async registration(email: string, password: string) {
        return await $api.post('auth/register', {email, password})
    }

    static async login(email: string, password: string, rememberMe: boolean) {
        return await $api.post('auth/login', {email, password, rememberMe})
    }

    static async authMe(token: string) {
        return await $api.post('auth/me', {})
    }

}


export class PacksService {
    static async getTable(params: SearchParamsType) {
        const keys = Object.keys(params)
        let searchParams = ""
        keys.forEach((k) => {
            const value = params[k as keyof SearchParamsType]
            if(value) {
                searchParams += k + "=" + value + "&"
            }

        })
        return await $api.get('cards/pack?'+ searchParams)
    }
    static async addTable(name: string) {
        return await $api.post('cards/pack', {cardsPack: {name: name}})
    }
    static async removeTable(id: string) {
        return await $api.delete('cards/pack')
    }
}

