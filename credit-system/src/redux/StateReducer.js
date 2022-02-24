import { TOKEN_INFO } from "./ActionCostants";
const tokenWithoutJWT = {
    token : ""
}
const tokenReducer = (state = {...tokenWithoutJWT},action) => {
    if(action.type === TOKEN_INFO){
        const newToken = action.token
        const token = {
            token : newToken
        }
        return token
    }
    return state
}

export default tokenReducer