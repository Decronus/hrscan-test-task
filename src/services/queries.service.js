import axiosInstance from "../utils/axios";

class Queries {
    getAllUsers() {
        return axiosInstance.get("users");
    }

    updateUser(id) {
        return axiosInstance.patch(`users/${id}/update`);
    }

    regUser(body) {
        return axiosInstance.post("reg", body);
    }

    loginUser(body) {
        return axiosInstance.post("login", body);
    }

    uploadPhoto(id, body) {
        return axiosInstance.patch(`upload/${id}`, body, { headers: { "Content-Type": "multipart/form-data" } });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Queries();
