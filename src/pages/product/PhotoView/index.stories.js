import PhotoView from '.';
import ProductImage from '../../../assets/images/nike.webp';

export default {
	component: PhotoView,
};

const Template = (args) => <PhotoView {...args} />;

export const Default = Template.bind({});
Default.args = {
	image: ProductImage,
};
