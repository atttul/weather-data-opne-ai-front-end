import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export const getWeatherData = async (prompt) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/get/weather/data`, { prompt });
        return response.data;
    } catch (error) {
        return { success: false, message: error.message };
    }
};
