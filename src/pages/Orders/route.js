import routeConstants from 'shared/constants/routes'
import Orders from './Orders'
import generalSubRoute from './pages/General/route'
import addressesSubRoute from './pages/Addresses/route'
import ordersSubRoute from './pages/Orders/route'

const ordersRoute = {
    path: routeConstants.ORDERS.route,
    component: Orders,
    routes:[
        generalSubRoute,
        addressesSubRoute,
        ordersSubRoute
    ]
}

export default ordersRoute;