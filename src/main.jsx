import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// todo: Style global
import './assets/Global.css';

// todo: Paginas
import App from "./Pages/Container_body/App";
import ErroPage from './Pages/ErroPage/ErroPage';

// todo: Rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>
  }
])


// todo: Configuraçoes finais
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
