import axios from "axios";
import {SearchParamsType, SearchReducerStateType} from "../redux/search-reducer";

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

    static async authMe() {
        return await $api.post('auth/me', {})
    }

}


export class PacksService {
    static async getTable(params?: SearchParamsType) {
        if (params) {
            const keys = Object.keys(params)
            let searchParams = ""
            keys.forEach((k) => {
                const value = params[k as keyof SearchParamsType]
                if (value) {
                    searchParams += k + "=" + value + "&"
                }
            })
            return await $api.get('cards/pack?' + searchParams)
        } else {
            return await $api.get('cards/pack?')
        }
    }

    static async addTable(name: string) {
        return await $api.post('cards/pack', {cardsPack: {name: name}})
    }

    static async removeTable(id: string) {
        return await $api.delete(`cards/pack?id=${id}`)
    }

    static async changeTable(id: string, newName: any) {
        return await $api.put(`cards/pack`, {cardsPack: {_id: id, name: newName}})
    }
}

