import CheckOut from '.';

export default {
	component: CheckOut,
};

const Template = (args) => <CheckOut {...args} />;

export const Default = Template.bind({});
Default.args = {
	totalPrice: 1000,
	isCartEmpty: false,
	history: {},
};
