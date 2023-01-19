/* -----------IMPORTACIONES------------- */
//Modulos
//Estilos
import './ItemCount.css'

//Componentes
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
//Core

/*------------ LOGICA ----------*/
const ItemCount = (props) => { //funcion constructora

    const [count,setCount] = useState(0)
    const addOne = () => {
        if(count < props.stock){
            setCount(count + 1)
        } 
    }

    const disOne = () => {
        if(count > 0) {
            setCount(count - 1)
        } 
    }

    const onAdd = () => {
        console.log(count)
    }

    return(
        <div className='box-count'>
            <div className='box-stock'>
            {/* <button onClick={addOne}>+</button> */}
            <Button onClick={addOne} variant="primary">+</Button>
            <p>{count}</p>
            {/* <button onClick={disOne}>-</button> */}
            <Button onClick={disOne} variant="primary">-</Button>
            </div>
            {/* <button onClick={onAdd}>Agregar</button> */}
            <Button onClick={onAdd} variant="primary">Agregar</Button>
        </div>
    )

}

/*-------------EXPORTACION----------- */
export default ItemCount