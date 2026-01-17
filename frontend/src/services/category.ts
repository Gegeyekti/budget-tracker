import api from "@/api"
import getTokenheader from "@/utils/getTokenHeader"
import { handleApiError } from "@/utils/handleApiError"

export const fetchAllCategories = async () => {
    try {
        const res = await api.get('/category', {
            headers: getTokenheader()
        })
        return res.data;
    } catch (error) {
        handleApiError(error, 'Failed to fetch category')
    }
}

export const fetchCategoryById = async (id: number) => {
    try {
        const res = await api.get(`/category/${id}`, {
            headers: getTokenheader()
        })
        return res.data;
    } catch (error) {
        handleApiError(error, 'Failed to fetch category ID')
    }
}

export const createCategory = async (data: {name: string, description?: string}) => {
    try {
        const res = await api.post('/category', data, {
            headers: getTokenheader()
        })
        return res.data;
    } catch (error) {
        handleApiError(error, 'Failed to fetch categories')
    }
}

export const updateCategory = async (id: number, data: {name: string, description?: string}) => {
    try {
        const res = await api.put(`/category/${id}`, data, {
            headers: getTokenheader()
        })
        return res.data
    } catch (error) {
        handleApiError(error, 'Failed to fetch categories')
    }
}

export const deleteCategory = async (id: number) => {
    try {
        const res = await api.delete(`/category/${id}`, {
            headers: getTokenheader()
        })
        return res.data
    } catch (error) {
        handleApiError(error, 'Failed to fetch categories')
    }
}