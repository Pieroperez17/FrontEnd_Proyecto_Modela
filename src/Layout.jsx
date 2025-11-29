import './index.css';
import { Link } from "react-router-dom";


export default function Layout({ children }) {
    return (
        <div className="container">
            <BarraNavegacion />
            <main className="main">
                {children}
            </main>
        </div>
    );
}

const BarraNavegacion = () => {

    return (
        <header className="navbar">
            <div className="Texto-info">Sistema De Control De Inventario</div>
            <div className="navbar-container">
                <nav className="nav-desktop">
                    <Link 
                        to={'/inicio'}
                        className="nav-link"
                    >
                        INICIO
                    </Link>
                    <Link 
                        to={'/Inventario'}
                        className="nav-link"
                    >
                        INVENTARIO
                    </Link>
                    <Link 
                        to={'/configuracion'}
                        className="nav-link"
                    >
                        CONFIGURACIÓN
                    </Link>
                </nav>
            </div>
        </header>
    );
};