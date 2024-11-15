import { ProductPhotoView } from './index.styles';

const PhotoView = ({ image, title }) => {
	return (
		<ProductPhotoView>
			{[1, 2, 3, 4].map((item) => (
				<img
					src={image}
					key={item}
					alt={title}
				/>
			))}
		</ProductPhotoView>
	);
};

export default PhotoView;
