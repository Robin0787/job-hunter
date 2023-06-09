import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home/Home'
import JobDetails from './Components/JobDetails'
import Statistics from './Components/Statistics'
import { getJobFromDB } from './Utility/utilities'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs />,
        loader: getJobFromDB
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/job/:jobID',
        element: <JobDetails />,
        loader: ({params}) => params.jobID
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
