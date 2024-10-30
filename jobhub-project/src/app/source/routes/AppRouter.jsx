import React from 'react'
import { RouteMaker } from '../../components/routes/routes'
import Home from '../Pages/Home/Home'
import FormComponent from '../../components/PageComponent/FormComponent'

const AppRouter = () => {
  return (
    <>
    <RouteMaker
        routes={{
            "/" : <Home/>,
            "/registration" : <FormComponent/>
        }}
    />
    </>
  )
}

export default AppRouter