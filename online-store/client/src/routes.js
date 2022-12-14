import {ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE , LOGIN_ROUTE , PRODUCT_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket />
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage />
    },
]