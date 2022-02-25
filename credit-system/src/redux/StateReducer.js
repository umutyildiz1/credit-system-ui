import { TOKEN_INFO } from "./ActionCostants";
const tokenWithoutJWT = {
    token : "",
    sid : 0
}
const tokenReducer = (state = {...tokenWithoutJWT},action) => {
    if(action.type === TOKEN_INFO){
        const newToken = action.token
        const sid = action.sid
        const token = {
            token : newToken,
            sid 
        }
        return token
    }
    return state
}

export default tokenReducer