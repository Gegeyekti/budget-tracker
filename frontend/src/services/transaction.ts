import api from "@/api";
import { handleApiError } from "@/utils/handleApiError";
import getTokenheader from "@/utils/getTokenHeader";

export const fetchTransaction = async (page= 1, limit=10, search = "") => {
    try {
        const params = new URLSearchParams({page: String(page), limit: String(limit)});
        if(search) params.append("search", search);

        const res = await api.get(`/transaction?${params.toString()}`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const fetchTransactionById = async (id: number) => {
    try {
        const res = await api.get(`/transaction?${id}`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const createTransaction = async (data: Record<string, unknown>) => {
    try {
        const res = await api.post(`/transaction`, data, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const editTransaction = async (id: number, data: Record<string, unknown>) => {
    try {
        const res = await api.put(`/transaction/${id}`, data, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}
export const deleteTransaction = async (id: number) => {
    try {
        const res = await api.delete(`/transaction/${id}`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const fetchMonthlySummary = async () => {
    try {
        const res = await api.get(`/transaction/monthly-summary`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const fetchMonthlyChart = async () => {
    try {
        const res = await api.get(`/transaction/monthly-chart`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const fetchTodayTransaction = async () => {
    try {
        const res = await api.get(`/transaction/today`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}

export const fetchTotalExpenseStat = async () => {
    try {
        const res = await api.get(`/transaction/today-expense-stats`, {
            headers: getTokenheader(),
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Transaction Error")
    }
}