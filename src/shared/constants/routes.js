export default Object.freeze({
    PRODUCTS:{
        name: 'Products',
        route: '/products'
    },
    CUSTOMERS:{
        name: 'Customers',
        route: '/customers'
    },
    ORDERS:{
        name: 'Orders',
        route: '/orders',
        subroutes: {
            GENERAL: {
                name: 'General',
                route: "/general"
            },
            ADDRESSES: {
                name: 'Addresses',
                route: '/addresses'
            },
            ORDERS: {
                name: 'Orders',
                route: '/orders'
            }
        }
    },
    NEWS:{
        name: 'News',
        route: '/news'
    },
})