import axiosClient from "./axiosClient";

class CategoryService
{
    getAll(params) {
        const url = 'category?';
        return axiosClient.get(url, { params });
    }

    getAllByParent() {
        const url = 'category?';
    }
}

const categoryService = new CategoryService();
export default categoryService;
