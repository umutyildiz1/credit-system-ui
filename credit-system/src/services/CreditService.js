import axios from "axios";

class CreditService {
  query(sid, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get("/api/credits/query?sid=" + sid, { headers });
  }
}

export default CreditService;
