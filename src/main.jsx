import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import CataloguePage from './pages/CataloguePage.jsx'
import DoorPage from './pages/DoorPage.jsx'
import App from './App'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<App/>}>
        <Route path={'catalogue'}>
            <Route index element={<CataloguePage/>}/>
            <Route path={':id'} element={<DoorPage/>}/>
        </Route>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>,
)
