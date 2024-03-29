/* -----------IMPORTACIONES------------- */

//Modulos
//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'
//import { propTypes } from 'react-bootstrap/esm/Image'
import { useEffect, useState } from 'react'


//Core

/*------------ LOGICA ----------*/

// Esto estaba antes -> const ItemList = (props) => { //funcion constructora
const ItemList = ({ categoria }) => { //funcion constructora

    //Hacer:
    //1)array de objetos


    //4)Mostrar todo los objetos con la informacion real

    // const listaDeProductos = [
    //     {
    //         id: 1,
    //         nombre: "Pantalon",
    //         descripcion: "Un pantalon amarillo",
    //         precio: 50,
    //         categoria: "Pantalones y Jeans",
    //         stock: 10
    //     },
    //     {
    //         id: 2,
    //         nombre: "Remera",
    //         descripcion: "Una linda remera",
    //         precio: 25,
    //         categoria: "Remeras y Camisas",
    //         stock: 15
    //     },
    //     {
    //         id: 3,
    //         nombre: "Sweater",
    //         descripcion: "Muy abrigado",
    //         precio: 60,
    //         categoria: "Abrigos y Sweaters",
    //         stock: 20
    //     },
    //     {
    //         id: 4,
    //         nombre: "Camisa",
    //         descripcion: "Con estilo",
    //         precio: 30,
    //         categoria: "Remeras y Camisas",
    //         stock: 9
    //     },
    //     {
    //         id: 5,
    //         nombre: "Pollera",
    //         descripcion: "Para fiesta",
    //         precio: 36,
    //         categoria: "Polleras",
    //         stock: 8
    //     }

    // ]
    /* 
         TRANSFORMACION DE JS A HTML:
         let listaPorCategoria
         Let ProductosHTML
         if(props.categoria === "todo"){
             ProductosHTML = listaPorCategoria.map(productos => <Producto key={producto.id} informscion={Producto}/>)
         }else{
             listaPorCategoria = listaDeProductos.filter(productos => productos.categoria === props.categoria)
             ProductosHTML = listaPorCategoria.map(productos => <Producto key={producto.id} informscion={Producto}/>)
         }
             
     */


    // Prueba con fetch
    //const ListaDeProductosRenderizables = fetch('./milista.json')
    //.then(res=>res.json())
    //.then(json.map( productos => <Item key={productos.id} id={"productos" + productos.id} data={productos}/>))
    //.then(ListaDeProductosRenderizables => setProductos(<Item key={productos.id} id={"producto" + productos.id} data={productos}/>))


    // // // const [productos, setProductos] = useState([])
    // // //     useEffect(() => {
    // // //         fetch('https://fakestoreapi.com/products')
    // // //             .then(res => res.json())
    // // //             .then(json => {setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />))})
    // // //     }, [categoria])


    //Esto anda
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('../milista.json')
            .then(res => res.json())
            .then(json => {
                if (!categoria) {
                    setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />))
                } else {
                    setProductos(json.filter((item) => item.categoria === categoria).map(unitem => <Item key={unitem.id} id={"producto" + unitem.id} data={unitem} />))
                }
            })
    }, [categoria])

    //2)Transformar estos datos en elementos renderizables
    //const ListaDeProductosRenderizables = listaDeProductos.map( productos => <Item key={productos.id} id={"productos" + productos.id} data={productos}/>)
    //data={productos} <-es igual a->nombre={productos.nombre} descripcion={productos.descripcion} precio={productos.precio} categoria={productos.categoria} stock={productos.stock}



    //3)Iterar nuestro array de objetos

    // if (categoria != undefined) {
    //     productos = productos.map(producto => {

    //     })
    // }
    // // // // if (!categoria) {
    // // // //     console.log("no se selecciono categoria");


    // const [productos, setProductos] = useState([])
    // useEffect(() => {
    //     if (!categoria) {
    //         fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => {setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />))})
    //     }else{
    //         fetch('https://fakestoreapi.com/products/category/${categoria}')
    //         .then(res => res.json())
    //         .then(json => {setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos} />))})
    //     }

    // }, [categoria])



    // // // // } else {
    // // // //     console.log(categoria)
    // // // //     const [productos, setProductos] = useState([])
    // // // //     useEffect(() => {

    // // // //     }, [categoria])
    // // // // }

    // console.log(productos);
    // // // // // const filtrarPorCategoria = (productos) => {
    // // // // //     // Avoid filter for null value
    // // // // //     if (!categoria) {
    // // // // //         return productos;
    // // // // //     }

    // // // // //     const productosFiltrador = productos.filter(
    // // // // //         (item) => item.categoria === categoria
    // // // // //     );
    // // // // //     return productosFiltrador;
    // // // // // };

    // // // // // console.log(filtrarPorCategoria(productos))


    // <div>
    //     {/* <p>Este es el item list</p> */}
    //     {/* {ListaDeProductosRenderizables} */}
    //     {productos}
    // </div>


    //const salida = productos.filter(productos => productos.categoria === categoria)
    return (
        //salida
        productos
    )

}

/*-------------EXPORTACION----------- */

export default ItemList