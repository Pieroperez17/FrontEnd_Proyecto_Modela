import React, { useState, useEffect } from 'react';
import './estilosgenerales.css';

export const ApiTable = ({ apiUrl, columns }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Error en la API');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [apiUrl]);

    if (loading) return <div>Cargando datos...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="api-table-container">
        <table className="api-table">
            <thead>
            <tr>
                {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                    <td key={colIndex}>{row[col.accessor]}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};
