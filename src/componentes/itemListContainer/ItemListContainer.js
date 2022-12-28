//importacion:

//Modulos

//Estilos

import './ItemListContainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//Componentes

//Core


//Logica:

const ItemListContainer = (props) => {

/*     return (

         <p>
             Componente contenedor de ItemListContainer {props.greeting}
         </p> 
    )
} */

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/girls-beautiful-yellow-skinny-trousers-260nw-712737529.jpg" />
            <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

//Exportacion:
export default ItemListContainer
