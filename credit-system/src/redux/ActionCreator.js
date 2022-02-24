import { TOKEN_INFO } from "./ActionCostants";

export const actionTokenInfo = (token) =>{
    return {
        type : TOKEN_INFO,
        token
    }
}