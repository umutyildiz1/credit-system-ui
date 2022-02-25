import { TOKEN_INFO } from "./ActionCostants";

export const actionTokenInfo = (token,sid) =>{
    return {
        type : TOKEN_INFO,
        token,
        sid
    }
}