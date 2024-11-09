import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Discord from "./components/Discord/Discord.jsx";
import User from './components/User/User.jsx'
import GitHub, { githubInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path: '/',
//   element : <App />,
//   children: [
//     { path: "",
//       element: <Home />
//     },
//     {
//       path: 'home',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },
//     {
//       path: '/discord',
//       element: <Discord />
//     }
//   ]
// }])

// second method doing same thing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='discord' element={<Discord/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubInfo}
      path='github' 
      element={<GitHub/>} 
      />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
