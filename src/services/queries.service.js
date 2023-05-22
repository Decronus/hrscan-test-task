import axiosInstance from "../utils/axios";

class Queries {
    regUser(body) {
        return axiosInstance.post("reg", body);
    }

    loginUser(body) {
        return axiosInstance.post("login", body);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Queries();
