import Layout from "../../Layout";
import { ApiTable } from "../../components/ApiTable";




export function Proveedores() {

    const columns = [
        { header: 'Producto', accessor: 'nombre' },
        { header: 'RUC', accessor: 'ruc' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Telefono', accessor: 'telefono' },
        { header: 'Correo', accessor: 'correo' }
    ];
    return (
        <Layout>
            <h1>Proveedores</h1>
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/proveedores" columns={columns} />
        </Layout>
    );
}

export function Categorias() {

    const columns = [
        { header: 'Producto', accessor: 'nombre' },
        { header: 'RUC', accessor: 'ruc' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Telefono', accessor: 'telefono' },
        { header: 'Correo', accessor: 'correo' }
    ];
    return (
        <Layout>
            <h1>Categorias</h1>
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/categorias" columns={columns} />
        </Layout>
    );
}

export function Piezas() {

    const columns = [
        { header: 'Producto', accessor: 'nombre' },
        { header: 'RUC', accessor: 'ruc' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Telefono', accessor: 'telefono' },
        { header: 'Correo', accessor: 'correo' }
    ];
    return (
        <Layout>
            <h1>Piezas</h1>
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/proveedores" columns={columns} />
        </Layout>
    );
}


export function Sucursales() {

    const columns = [
        { header: 'Nombre', accessor: 'nombre' },
        { header: 'Direccion', accessor: 'direccion' },
        { header: 'Ciudad', accessor: 'ciudad' }
    ];
    return (
        <Layout>
            <h1>Sucursales</h1>
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/sucursales" columns={columns} />
        </Layout>
    );
}

export function Empleados() {
    const columns = [
        { header: 'Nombre', accessor: 'nombres' },
        { header: 'Apellido', accessor: 'apellidos' },
        { header: 'Cargo', accessor: 'cargo' },
        { header: 'Usuario', accessor: 'usuario' },
        { header: 'Contrasena', accessor: 'contrasena' },
        { header: 'id_sucursal', accessor: 'id_sucursal' }
    ];
    return (
        <Layout>
            <h1>Empleados</h1>
            <ApiTable apiUrl="https://proyecto-modela-backend.vercel.app/empleados" columns={columns} />
        </Layout>
    );
}



export default {
    Proveedores,
    Categorias, 
    Piezas,
    Sucursales,
    Empleados
};
