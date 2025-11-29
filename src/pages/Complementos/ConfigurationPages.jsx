import Layout from "../../Layout";
import { ApiTable } from "../../components/ApiTable";
import { useApiFormModal } from '../../components/useApiFormModal'; // Tu hook
import ApiFormModal from '../../components/ApiFormModal'; // Tu modal
import '../../components/estilosgenerales.css';


export function Proveedores() {
    const columns = [
        { header: 'ID', accessor: 'id_proveedor' },
        { header: 'Producto', accessor: 'nombre' },
        { header: 'RUC', accessor: 'ruc' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Telefono', accessor: 'telefono' },
        { header: 'Correo', accessor: 'correo' }
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/proveedores');


    return (
        <Layout>
            <h1>Proveedores</h1>
            <button onClick={openModal} className="btn-add">
                + Nuevo Empleado
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/proveedores" columns={columns} />
        </Layout>
    );
}

export function Categorias() {

    const columns = [
        { header: 'ID', accessor: 'id_categoria' },
        { header: 'Nombre Categoria', accessor: 'nombre' },
        { header: 'Descripcion', accessor: 'descripcion' },
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/categorias');

    return (
        <Layout>
            <h1>Categorias</h1>
            <button onClick={openModal} className="btn-add">
                + Nueva Categoria
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/categorias" columns={columns} />
        </Layout>
    );
}

export function Productos() {

    const columns = [
        { header: 'ID', accessor: 'id_producto' },
        { header: 'Nombre', accessor: 'nombre' },
        { header: 'Descripcion', accessor: 'descripcion' },
        { header: 'Precio', accessor: 'precio_unitario' },
        { header: 'Stock', accessor: 'stock_actual' },
        { header: 'ID Categoria', accessor: 'id_categoria' },
        { header: 'ID Proveedor', accessor: 'id_proveedor' }
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/productos');

    return (
        <Layout>
            <h1>Productos</h1>
            <button onClick={openModal} className="btn-add">
                + Nueva Categoria
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/productos" columns={columns} />
        </Layout>
    );
}


export function Sucursales() {

    const columns = [
        { header: 'ID', accessor: 'id_sucursal' },
        { header: 'Nombre', accessor: 'nombre' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Ciudad', accessor: 'ciudad' }
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/sucursales');


    return (
        <Layout>
            <h1>Sucursales</h1>
            <button onClick={openModal} className="btn-add">
                + Nueva Categoria
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/sucursales" columns={columns} />
        </Layout>
    );
}

export function Empleados() {
    const columns = [
        { header: 'ID', accessor: 'id_empleado' },
        { header: 'Nombre', accessor: 'nombres' },
        { header: 'Apellido', accessor: 'apellidos' },
        { header: 'Cargo', accessor: 'cargo' },
        { header: 'Usuario', accessor: 'usuario' },
        { header: 'Contrasena', accessor: 'contrasena' },
        { header: 'id_sucursal', accessor: 'id_sucursal' }
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/empleados');

    return (
        <Layout>
            <h1>Empleados</h1>
            <button onClick={openModal} className="btn-add">
                + Nueva Categoria
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/empleados" columns={columns} />
        </Layout>
    );
}
export function Clientes() {
    const columns = [
        { header: 'ID', accessor: 'id_cliente' },
        { header: 'Nombre', accessor: 'nombre' },
        { header: 'Documento', accessor: 'documento' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Telefono', accessor: 'telefono' },
        { header: 'Correo', accessor: 'correo' }
    ];

    const { 
        isOpen, formData, loading, error, openModal, closeModal, handleInputChange, handleSubmit, columns: formColumns 
    } = useApiFormModal(columns, 'https://proyecto-modela-backend.vercel.app/clientes');

    return (
        <Layout>
            <h1>Clientes</h1>
            <button onClick={openModal} className="btn-add">
                + Nueva Categoria
            </button>
            <ApiFormModal
                isOpen={isOpen}
                formData={formData}
                loading={loading}
                error={error}
                columns={formColumns}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                closeModal={closeModal}
            />
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/clientes" columns={columns} />
        </Layout>
    );
}


export default {
    Proveedores,
    Categorias, 
    Productos,
    Sucursales,
    Empleados,
    Clientes

};
