import axiosClient from "../axiosClient";

class UserService
{
    login(params) {
        const url = 'auth/login';
        return axiosClient.post(url, { params });
    }
}

const userService = new UserService();
export default userService;
