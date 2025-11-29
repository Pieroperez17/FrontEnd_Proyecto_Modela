import React from 'react';
import './estilosgenerales.css';



const ApiFormModal = ({ 
    isOpen, 
    formData, 
    loading, 
    error, 
    columns, 
    handleInputChange, 
    handleSubmit, 
    closeModal 
    }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
            <h3>Agregar Nuevo Registro</h3>
            <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <form onSubmit={handleSubmit}>
            <div className="form-grid">
                {columns.map((col) => (
                <div key={col.accessor} className="form-group">
                    <label>{col.header}</label>
                    <input
                    type={col.accessor.includes('contrasena') ? 'password' : 'text'}
                    value={formData[col.accessor] || ''}
                    onChange={(e) => handleInputChange(col.accessor, e.target.value)}
                    placeholder={`Ingrese ${col.header.toLowerCase()}`}
                    required
                    disabled={loading}
                    />
                </div>
                ))}
            </div>
            
            {error && <div className="error">{error}</div>}
            
            <div className="modal-actions">
                <button type="button" onClick={closeModal} disabled={loading}>
                    Cancelar
                </button>
                <button type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar'}
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};
export default ApiFormModal;