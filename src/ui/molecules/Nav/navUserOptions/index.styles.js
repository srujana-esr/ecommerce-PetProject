import styled from 'styled-components';
import { FlexColumn } from '../../../../theme/defaultStyles';

export const StyledNavUserOptions = styled.div`
	height: 100%;
	${FlexColumn}
	margin-right: 20px;

	ion-icon {
		font-size: 1.8rem !important;
	}

	a,
	img {
		&:hover {
			cursor: pointer;
		}
	}
`;
