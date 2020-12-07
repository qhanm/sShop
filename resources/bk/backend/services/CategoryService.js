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

    getOne(id) {
        const url = `category/${id}`;
        return axiosClient.get(url);
    }

    post(data) {
        const url = 'category';
        return axiosClient.post(url, data);
    }
}

const categoryService = new CategoryService();
export default categoryService;
