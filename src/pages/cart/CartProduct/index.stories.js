import CartProduct from '.';

export default {
	component: CartProduct,
	argType: {
		title: "Nike Air Force 1 '07",
		qty: 1,
		price: 7495,
	},
};

const Template = (args) => <CartProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Nike Air Force 1 '07",
	qty: 1,
	price: 7495,
};
