import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params:{
        key : "3bd75e507fd94a4da78c601cec990dcc"
    }
})