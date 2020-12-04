import axiosClient from "./axiosClient";

class CategoryService
{
    getAll(params) {
        const url = 'category?';
        return axiosClient.get(url, { params });
    }
}

const categoryService = new CategoryService();
export default categoryService;
