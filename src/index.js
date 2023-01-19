//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Estilos
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Componentes
import App from './App';
import NavBar from './componentes/navbar/NavBar.js';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import Footer from './componentes/footer/Footer';



import reportWebVitals from './reportWebVitals';

//Logica
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<ItemListContainer />}>
        
      </Route>
      <Route exact path='/categoria/:id' element={<ItemListContainer />}>

      </Route>
      <Route exact path='/item/:id' element={<ItemDetailContainer />}>
        
      </Route>
    </Routes>
    </BrowserRouter>
    
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
