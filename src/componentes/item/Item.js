/* -----------IMPORTACIONES------------- */
//Modulos
//import { useState } from 'react';
//Estilos
import './Item.css'
//Componentes
import ItemCount from '../itemCount/ItemCount';

import Card from 'react-bootstrap/Card';

//Core

/*------------ LOGICA ----------*/
const Item = (props) => { //funcion constructora

    const {nombre,descripcion,precio,categoria,stock} = props.data //destructuramos
    
    return (

        // <div>
        //     <p>{nombre}</p>
        //     <p>{descripcion}</p>
        //     <p>{precio}</p>
        //     <p>{categoria}</p>
        //     <ItemCount stock={props.stock} />
        // </div>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/girls-beautiful-yellow-skinny-trousers-260nw-712737529.jpg" />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                {descripcion}
                </Card.Text>
                <Card.Footer>{categoria}</Card.Footer>
                <ItemCount stock={props.stock} />
                
            </Card.Body>
        </Card>

    )

 }

/*-------------EXPORTACION----------- */
export default Item