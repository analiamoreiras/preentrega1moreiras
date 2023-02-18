/* -----------IMPORTACIONES------------- */
//Modulos
//Estilos
import './ItemDetail.css'
//Componentes
import { useEffect, useState } from 'react'
import Item from '../item/Item'
//Core

/*------------ LOGICA ----------*/
const ItemDetail = ({productoId}) => { //funcion constructora
    const [producto, setProducto] = useState([]) 

    
    console.log(productoId)
    useEffect(() => {
        fetch('../milista.json')
            .then(res => res.json())
            .then(json => {
                setProducto(json.filter((item) => item.id == productoId).map(unitem => <Item key={unitem.id} id={"producto" + unitem.id} data={unitem} />))
                console.log("parar aca.")
            })
    }, [productoId])

    //const {nombre,descripcion,precio,categoria} = props.data //destructuramos

    return(
        // <div>
        //     <p>{nombre}</p>
        //     <p>{descripcion}</p>
        //     <p>{precio}</p>
        //     <p>{categoria}</p>
        // </div>
        producto
    )

}

/*-------------EXPORTACION----------- */
export default ItemDetail