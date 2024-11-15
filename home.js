import React from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        if (!email || !password) {
        setError('ingrese su correo y contraseña.');
        return;
        }
        console.log('Inicio de sesión intentado con:', { email, password });
    };

    return (
        <Container>
        <h2 className="inicio">Iniciar Sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="correo">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="clave">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
            </Button>
        </Form>
        </Container>
    );
}

export default Home;
