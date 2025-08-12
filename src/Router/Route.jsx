import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayouts from '../Layouts/RootLayouts'
import Error from '../Page/Error'
import Home from '../Page/Home'
import Projects from '../Page/Projects'
import Details from '../Page/Details'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayouts/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        Component: Home 
      },
      {
        path:'/projects',
        Component: Projects
      },
      {
        path:'/details/:id',
        Component:Details
      }
    ]
    
  }
])