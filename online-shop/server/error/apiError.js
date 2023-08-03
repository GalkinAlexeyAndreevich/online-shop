// extends - наследование
export class ApiError extends Error{
    constructor(status,message){
        // super - переписывание родительского констуктора (можно и метода) 
        super()
        this.status = status
        this.message = message
    }
    // static работает на уровне класса, но не экземпляра
    static badRequest(message){
        return new ApiError(404,message)
    }
    static internal(message){
        return new ApiError(500,message)
    }
    static forbidden(message){
        return new ApiError(483,message)
    }
}