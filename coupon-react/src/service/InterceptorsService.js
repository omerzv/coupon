
import axios from "axios";

export default function createInterceptors() {
    axios.interceptors.request.use(request => {
        if (localStorage.getItem("token")) {
            request.headers = {token:localStorage.getItem("token") };
        }
        return request; // must return the changed request object
    });
}

