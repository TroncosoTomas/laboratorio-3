import React from 'react';
import Sidebar from './Sidebar';
import DetallesUsuario from './DetallesUsuario';
import SelectorImagenes from './SelectorImagenes';

const PaginaUsuario = () => {
  return (
    <div className="pagina-usuario">
      <Sidebar />
      <div className="contenido-usuario">
        <DetallesUsuario />
        <SelectorImagenes />
      </div>
    </div>
  );
};

export default PaginaUsuario;
