export const USER_LOGIN = "USER_LOGIN"



export const userLogin = (user)=>{

    return{
        type:USER_LOGIN,
        payload:user
    }
}