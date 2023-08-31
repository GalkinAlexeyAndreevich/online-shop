import Admin from "../pages/AdminPage";
import Basket from "../pages/BasketPage";
import Auth from "../pages/AuthPage";
import Shop from "../pages/ShopPage";
import Device from "../pages/DevicePage";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const authRoutes = [
	{
		Component: <Admin/>,
		path: ADMIN_ROUTE,
	},
    {
		Component: <Basket/>,
		path: BASKET_ROUTE,
	},
];

export const publicRoutes = [
	{
		Component: <Shop/>,
		path: SHOP_ROUTE,
	},
    {
		Component: <Auth/>,
		path: LOGIN_ROUTE,
	},
    {
		Component: <Auth/>,
		path: REGISTRATION_ROUTE,
	},
    {
		Component: <Device/>,
		path: DEVICE_ROUTE + '/:id',
	}
];