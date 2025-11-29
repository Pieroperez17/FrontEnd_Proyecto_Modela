import React, { useState } from 'react';

export const useApiFormModal = (columns, apiUrl) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Reset form con estructura de columns
    const resetForm = () => {
        const initialData = {};
        columns.forEach(col => {
        initialData[col.accessor] = '';
        });
        setFormData(initialData);
    };

    // Abrir modal y resetear form
    const openModal = () => {
        resetForm();
        setIsOpen(true);
    };

    // Cerrar modal
    const closeModal = () => {
        setIsOpen(false);
        setError(null);
    };

    // Manejar cambios en inputs
    const handleInputChange = (accessor, value) => {
        setFormData(prev => ({
        ...prev,
        [accessor]: value
        }));
    };

    // Enviar POST
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        // Reset y cerrar al éxito
        resetForm();
        closeModal();
        alert('¡Datos guardados exitosamente!');
        
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    return {
        isOpen,
        formData,
        loading,
        error,
        openModal,
        closeModal,
        handleInputChange,
        handleSubmit,
        columns
    };
};


