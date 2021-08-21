import routeConstants from 'shared/constants/routes';
import General from "./General";

 const generalSubRoute = {
    exact: true,
    path: routeConstants.ORDERS.subroutes.GENERAL.route,
    component: General
};
export default generalSubRoute