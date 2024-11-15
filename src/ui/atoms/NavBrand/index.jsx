import { Link } from 'react-router-dom';
import { BrandText } from '../../../theme/defaultStyles';
import { StyledNavBrand } from './index.styles';

const NavBrand = () => (
	<StyledNavBrand>
		<Link to='/'>
			<BrandText color='#000'>servU</BrandText>
		</Link>
	</StyledNavBrand>
);

export default NavBrand;
