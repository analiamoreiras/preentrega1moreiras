//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Estilos
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Componentes
//import App from './App';
import NavBar from './componentes/navbar/NavBar.js';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import Footer from './componentes/footer/Footer';
import NotFound from './componentes/notFound/NotFound';


import reportWebVitals from './reportWebVitals';

//Logica----------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:id' element={<ItemListContainer />}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
      <Route path= '*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
