import { lazy } from 'react';
import { View } from './index.styles';

const BasicInfo = lazy(() => import('./Basic'));
const ContactInfo = lazy(() => import('./Contact'));
const Orders = lazy(() => import('./Orders'));
const Wishlist = lazy(() => import('./Wishlist'));

const Content = ({ activeView }) => {
	if (activeView === 'info') {
		return (
			<View>
				<BasicInfo />
			</View>
		);
	}

	if (activeView === 'contact') {
		return (
			<View>
				<ContactInfo />
			</View>
		);
	}

	if (activeView === 'orders') {
		return (
			<View>
				<Orders />
			</View>
		);
	}

	return <View>
		<Wishlist />
	</View>;
};

export default Content;
