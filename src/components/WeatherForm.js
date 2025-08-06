import React, { useState } from 'react';
import { getWeatherData } from '../api';

const WeatherForm = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await getWeatherData(prompt);
        setResult(data);
        setLoading(false);
    };

    return (
        <div className="container mt-5">
            <p className="text-center mb-4">🙋🏻‍♂️ Atul's Personal AI Agent for Real-time Temperature of any city OR Ask anything</p>
            <h2 className="text-center mb-4">🌤️ Real-time Weather Temperature</h2>
            <form onSubmit={handleSubmit} className="text-center">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Type something like: What's the weather in Bangalore?"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Fetching...' : 'Get AI Response'}
                </button>
            </form>
            {result && (
                <div className="alert mt-4" role="alert"
                    style={{ backgroundColor: result.success ? '#d4edda' : '#f8d7da', color: result.success ? '#155724' : '#721c24' }}>
                    {result.data?.city
                        ? `🌡️ ${result.data.city}: ${result.data.temperature}`
                        : `💬 ${result.data}`}
                </div>
            )}
        </div>
    );
};

export default WeatherForm;
