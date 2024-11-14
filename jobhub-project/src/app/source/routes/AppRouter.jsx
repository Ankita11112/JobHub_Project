import React from 'react'
import { RouteMaker } from '../../components/routes/routes'
import Home from '../Pages/Home/Home'
import FormComponent from '../../components/PageComponent/FormComponent'
import TelecallerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/TelecallerJob/TelecallerJob'
import DocVerifyJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DocVerifyJob/DocVerifyJob'
import DataEntryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DataEntryJob/DataEntryJob'
import WebDesignerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WebDesignerJob/WebDesignerJob'
import GraphicDesignerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/GraphicDesignerJob/GraphicDesignerJob'
import WebDeveloperJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WebDeveloperJob/WebDeveloperJob'
import ConstructionJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/ConstructionJob/ConstructionJob'
import FrontOfficeJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/FrontOfficeJob/FrontOfficeJob'
import BackOfficeJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/BackOfficeJob/BackOfficeJob'
import HouseKeepingJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/HouseKeepingJob/HouseKeepingJob'
import DeliveryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DeliveryJob/DeliveryJob'
import SecurityJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/SecurityJob/SecurityJob'
import HotelStaffJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/HotelStaffJob/HotelStaffJob'
import WarehouseStaffJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WarehouseStaffJob/WarehouseStaffJob'
import FactoryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/FactoryJob/FactoryJob'
import EmployeeForm from '../../components/PageComponent/EmployeeForm'

const AppRouter = () => {
  return (
    <>
    <RouteMaker
        routes={{
            "/" : <Home/>,
          "/registration": <FormComponent />,
            "employeeRegistration": <EmployeeForm/>,
             '/telecaller' : <TelecallerJob/>,
             '/documentverification' : <DocVerifyJob/>,
             '/dataentry': <DataEntryJob/>,
             '/webdesigner': <WebDesignerJob/>,
             '/graphicdesigner': <GraphicDesignerJob/>,
             '/webdeveloper' : <WebDeveloperJob/>,
             '/construction' : <ConstructionJob/>,
             '/frontoffice' : <FrontOfficeJob/>,
             '/backoffice' : <BackOfficeJob/>,
             '/housekeeping' : <HouseKeepingJob/>,
             '/delivery' : <DeliveryJob/>,
             '/securityguard' : <SecurityJob/>,
             '/hotelstaff' : <HotelStaffJob/>,
             '/warehousestaff' : <WarehouseStaffJob/>,
             '/factory' : <FactoryJob/>
        }}
    />
    </>
  )
}

export default AppRouter