
import './NavBar.css';

import CardWidget from '../cardWidget/CardWidget.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//Logica:


const NavBar = (props) => {


    return (
        <>
            {/* <header className="navbar">
            <p>Mi primer enlace y te saludo = {props.saludo} y cuando me retiro digo = {props.despedida}</p>
           
        </header> */
       

                <Navbar bg="primary" variant="dark">
                    
                    <Container>
                        <Navbar.Brand href="#home">La Tienda</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Productos</Nav.Link>
                            <Nav.Link href="#features">Categorias</Nav.Link>
                            <Nav.Link href="#features">Nosotros</Nav.Link>
                            <Nav.Link href="#features">Carrito</Nav.Link>
                        </Nav>
                    </Container>
                    <CardWidget></CardWidget>
                </Navbar>

            }</>
    )
}

//Exportacion:
export default NavBar