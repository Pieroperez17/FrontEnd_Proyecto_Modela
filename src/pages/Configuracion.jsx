import Layout from "../Layout";
import './styles/inicio.css';
import { FaTable } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Configuracion() {
    const menuItems = [
        { label: 'Sucursales', path: '/sucursales' },
        { label: 'Categoria', path: '/categoria' },
        { label: 'Piezas', path: '/piezas' },
        { label: 'Proveedores', path: '/proveedores' },
        { label: 'Empleados', path: '/empleados' },
    ];

    return (
        <Layout>
            <div className="inicio-container">
                {menuItems.map((item) => (
                    <Link 
                        key={item.path}
                        to={item.path}
                        className="inicio-link"
                    >
                        <FaTable className="inicio-img" />
                        <h1>{item.label}</h1>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}