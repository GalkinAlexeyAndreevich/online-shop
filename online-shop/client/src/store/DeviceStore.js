import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor(){
        this._types = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Микроволновки'},
            {id:3, name:'Смартфоны'},
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name:'Apple'},

        ]
        this._devices = [
            {id:1, name:'Iphone 12 pro', price:100000,rating:5},
            {id:2, name:'Samsung a52', price:20000,rating:5},
            {id:3, name:'Iphone 12 pro', price:100000,rating:5},
            {id:4, name:'Samsung a52', price:20000,rating:5},
            {id:5, name:'Iphone 12 pro', price:100000,rating:5},
            {id:6, name:'Samsung a52', price:20000,rating:5},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this) // При обновлении переменных будет произведен перерендер
    }

    setTypes(types){
        this._types  = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }
    
    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}