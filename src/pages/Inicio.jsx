import Layout from "../Layout";
import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";


import './styles/inicio.css';

export default function Inicio() {
    return (
        <Layout>
            <div className="inicio-container">
                <Link 
                        to={'/inventario'}
                        className="inicio-link"
                >
                    <FaCoins className="inicio-img" />
                    <h1>Inventario</h1>
                </Link>

                <Link 
                        to={'/configuracion'}
                        className="inicio-link"
                >
                    <IoSettingsSharp className="inicio-img"/>
                    <h1>Configuracion</h1>
                </Link>
            </div>
        </Layout>
    );
}