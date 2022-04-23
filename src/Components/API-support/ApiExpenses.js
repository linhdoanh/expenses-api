import axios from "axios";
import { useEffect, useState } from "react";

const expenUrl = "https://5f62b7ce67e195001625f17c.mockapi.io/api/expenses";

const expensesAPI = () => {
    return {
        getAll: () => {
            return axios.get(`${expenUrl}`).then((res) => res.data);
        },
        create: (data) => {
            return axios.post(`${expenUrl}`, data).then((res) => res.data);
        },
        update: (id, data) => {
            return axios.put(`${expenUrl}/${id}`, data).then((res) => res.data);
        },
        delete: (id) => {
            return axios.delete(`${expenUrl}/${id}`).then((res) => res.data);
        }
    };
};

export default expensesAPI;