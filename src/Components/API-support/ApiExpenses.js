import axios from "axios";

const expenUrl = "https://5f62b7ce67e195001625f17c.mockapi.io/api/expenses";

const expensesAPI = {
        getAll() {
            return axios.get(`${expenUrl}`);
        },
        create (data) {
            return axios.post(`${expenUrl}`, data);
        },
        update (id, data) {
            return axios.put(`${expenUrl}/${id}`, data);
        },
        delete (id) {
            return axios.delete(`${expenUrl}/${id}`);
        }
};

export default expensesAPI;