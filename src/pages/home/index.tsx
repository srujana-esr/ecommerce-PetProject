import ProductList from './ProductList';
import { FONT_COLOR } from '../../theme/defaultConstants';
import { MainHeading } from '../../theme/defaultStyles';
import {
	Container,
	HeroBodyText,
	HeroContent,
	StyledHomeCatalogue
} from './index.styles';

const Home = () => (
	<Container>
		<HeroContent>
			<MainHeading
				color={FONT_COLOR.base}
				spacing='2px'
				size='2rem'>
				Your day starts with whatever you want
			</MainHeading>
			<HeroBodyText
				color={FONT_COLOR.base}
				weight='300'>
				We provide you everything A-Z for all your needs anytime
				<br />
				with guarenteed best prices.
			</HeroBodyText>
		</HeroContent>

		<StyledHomeCatalogue>
			<ProductList />
		</StyledHomeCatalogue>
	</Container>
);

export default Home;
