import React from "react";
import HomePage from "./Pages/Home/HomePage";
import NotFound from "./Pages/Error/NotFound";
import ProductsPage from "./Pages/Products/ProductsPage";
import ActionPage from "./Pages/Item/ActionPage";

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : '/products',
        exact : false,
        main : ({history}) => <ProductsPage history={history}/>
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => <ActionPage history={history}/>
    },
    {
        path : '/product/:id/edit',
        exact : false,
        main : ({match,history}) => <ActionPage match={match} history={history}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    },
];
export default routes;