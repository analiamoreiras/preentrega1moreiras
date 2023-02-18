/* -----------IMPORTACIONES------------- */
//Modulos
//Estilos
import './ItemDetailContainer.css'
//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Core

/*------------ LOGICA ----------*/
const ItemDetailContainer = () => { //funcion constructora

    const { id } = useParams()

    return (
        //    <section className='itemDetail-box'>
        //         <link to="/producto">Regresar a mis producto</link>
        //         {producto}
        //    </section>
        <ItemDetail productoId={id} />
    )

}


/*-------------EXPORTACION----------- */
export default ItemDetailContainer