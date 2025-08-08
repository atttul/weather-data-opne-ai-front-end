import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getWeatherData = async (prompt) => {
    try {
        console.log("API_BASE_URL", API_BASE_URL)
        const response = await axios.post(`${API_BASE_URL}/get/weather/data`, { prompt });
        return response.data;
    } catch (error) {
        return { success: false, message: error.message };
    }
};
