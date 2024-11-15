import ProductCard from '.';
import ProductImage from '../../../assets/images/nike.webp';

export default {
	component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	image: ProductImage,
	title: "Nike Air Force 1 '07",
	categoryTitle: 'Shoes',
	price: '7495',
};
