import axiosInstance from "../utils/axios";

class Queries {
    regUser(body) {
        return axiosInstance.post("reg", body);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Queries();
