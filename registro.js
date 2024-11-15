import React, { useState } from 'react';

function registro() {
  // Estados para manejar los datos del formulario
  const [formData, setFormData] = useState({
    usuario: '',
    fecha: '',
    email: '',
    clave: '',
  });

  const [message, setMessage] = useState('');

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { usuario, fecha, email, clave } = formData;

    if (!usuario || !fecha || !email || !clave) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    if (clave.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    console.log('Datos enviados:', formData);

    setMessage('Registro exitoso. ¡Bienvenido!');
    
    setFormData({
      usuario: '',
      fecha: '',
      email: '',
      clave: '',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div style={{ width: '300px' }}>
        <h3 className="text-center">Registrarse</h3>
        {message && <p className="text-center text-danger">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              placeholder="Ingrese su usuario"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              className="form-control"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
