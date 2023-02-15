import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

export default function () {
  return <div className={' w-screen min-h-screen bg-slate-600'}>
    <Navbar/>
    <main className={'h-full flex my-8'}>
      <Outlet/>
    </main>
  </div>
}