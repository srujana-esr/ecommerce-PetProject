import ProductInfo from '.';

export default {
	component: ProductInfo,
	args: {
		title: "Nike Airforce 1 '07",
		price: '8000',
		categoryTitle: 'Shoes',
		description: 'Nike LifeStyle sneakers',
	},
};

const Template = (args) => <ProductInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
