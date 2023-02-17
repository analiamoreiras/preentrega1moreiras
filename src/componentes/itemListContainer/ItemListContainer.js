//----------importacion:--------------

//Modulos
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Estilos
import './ItemListContainer.css';


//Componentes

import ItemList from '../itemList/ItemList';

//Core


//-----------Logica:------------
//

const ItemListContainer = () => {
    const {id} = useParams()
    // if (id != undefined){
    //     console.log(<ItemList/>)

    // }else{
    //     console.log("nada")
    // }
    return (
             <ItemList categoria={id}/>
        //  <div className='main-section'>
        //     <ItemList/>
        //  </div>   
    );
} 

    /* return (
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
    
}*/

//----------Exportacion:--------------
export default ItemListContainer
