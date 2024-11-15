import styled from 'styled-components';
import { FlexColumn } from '../../../theme/defaultStyles';


export const StyledNavBrand = styled.div`
	justify-self: flex-start;
	height: 100%;
	margin-left: 20px;

	${FlexColumn}

	a {
		text-decoration: none;

		p {
			font-size: 1.5rem;
			font-weight: 700;
			font-style: italic;
		}
	}
`;