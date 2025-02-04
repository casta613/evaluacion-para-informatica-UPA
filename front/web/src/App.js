import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Reporte from './componentes/Reporte';
import Inicio from './componentes/Inicio';
import Formulario from './componentes/Formulario';
import { Link } from "react-router-dom";
import './assets/estilo.css'

function App() {
  return (
    <>
      <nav id='menu'>
          <Link className='opcion' to='/'>HOME</Link>
          <Link className='opcion' to='/formulario'>FORMULARIO</Link>
          <Link className='opcion' to='/reporte'>REPORTE</Link>
      </nav>
      <Routes >
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/reporte' element={<Reporte/>}></Route>
        <Route path='/formulario' element={<Formulario/>}></Route>
      </Routes>
    </>
  );
}

export default App;
