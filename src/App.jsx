import {BrowserRouter as Router ,Route,Routes, Navigate} from 'react-router-dom'
import Layout from './Layout'
import './App.css'
import Inicio from './pages/Inicio.jsx'
import Configuracion from './pages/Configuracion.jsx'
import Inventario from './pages/Inventario.jsx'


import {Proveedores,Productos,Sucursales,Categorias,Empleados,Clientes} from './pages/Complementos/ConfigurationPages.jsx'



function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Pagina Raiz */}
          <Route path="/*" element={<Navigate to="/inicio" replace />} />
          {/* Otras Rutas */}
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/inventario" element={<Inventario/>} />
          <Route path="/configuracion" element={<Configuracion/>} />

          {/* Rutas adicionales de Configuracion */}
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/categoria" element={<Categorias/>} />
          <Route path="/sucursales" element={<Sucursales/>} />
          <Route path="/empleados" element={<Empleados/>} />
          <Route path="/clientes" element={<Clientes/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
