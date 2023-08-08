import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor(){
        this._isAuth = false // Может изменяться только методами (не на прямую)
        this._user = {}
        makeAutoObservable(this) // При обновлении переменных будет произведен перерендер
    }

    setIsAuth(bool){
        this._isAuth  = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }
    
    get user(){
        return this._user
    }
}