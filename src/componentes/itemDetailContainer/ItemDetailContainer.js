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
const [productos, setProductos] = useState([])

const {productoId} = useParams()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products/${productoId}')
    .then(res=>res.json())
    .then(productos => setProductos(<ItemDetail key={productos.id} id={"producto" + productos.id} data={productos}/>))
},[productoId])

    return(
       <section className='itemDetail-box'>
            <link to="/productos">Regresar a mis productos</link>
            {productos}
       </section>
    )

}


/*-------------EXPORTACION----------- */
export default ItemDetailContainer