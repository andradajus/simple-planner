import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL


export const LoginAPI = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${baseUrl}/api/token/`, { username, password });
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}
