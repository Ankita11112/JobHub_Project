import React from 'react'
import { RouteMaker } from '../../components/routes/routes'
import Home from '../Pages/Home/Home'

const AppRouter = () => {
  return (
    <>
    <RouteMaker
        routes={{
            "/" : <Home/>
        }}
    />
    </>
  )
}

export default AppRouter