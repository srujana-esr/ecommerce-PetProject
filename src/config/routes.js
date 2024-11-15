import { lazy } from 'react';
import Home from '../pages/home';

const Login = lazy(() => import('../pages/login'));
const UserProfile = lazy(() => import('../pages/profile'));
const SignUp = lazy(() => import('../pages/signup'));
const Cart = lazy(() => import('../pages/cart'));
const ProductPage = lazy(() => import('../pages/product'));
const OrderDetails = lazy(() => import('../pages/orderDetails'));
const Wishlist = lazy(() => import('../pages/wishlist'));

export const APP_ROUTES = [
	{
		id: 1,
		path: '/',
		isPrivate: false,
		component: Home,
		isExact: true,
	},
	{
		id: 2,
		path: '/login',
		isPrivate: false,
		component: Login,
		isExact: false,
	},
	{
		id: 3,
		path: '/signup',
		isPrivate: false,
		component: SignUp,
		isExact: false,
	},
	{
		id: 4,
		path: '/user/:name',
		isPrivate: true,
		component: UserProfile,
		isExact: false,
	},
	{
		id: 5,
		path: '/cart',
		isPrivate: false,
		component: Cart,
		isExact: false,
	},
	{
		id: 6,
		path: '/product/:id',
		isPrivate: false,
		component: ProductPage,
		isExact: false,
	},
	{
		id: 7,
		path: '/orders/:id',
		isPrivate: true,
		component: OrderDetails,
		isExact: false,
	},
	{
		id: 8,
		path: '/wishlist/:id',
		isPrivate: true,
		component: Wishlist,
		isExact: false,
	},
];
