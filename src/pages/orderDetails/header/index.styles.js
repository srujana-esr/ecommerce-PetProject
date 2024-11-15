import styled from 'styled-components';
import { FlexRow } from '../../../theme/defaultStyles';

export const Container = styled.div`
	${FlexRow}
	justify-content: flex-start;

	p {
		margin-left: 10px;
		font-size: 0.875rem;
		color: #70757a;

		:first-of-type {
			margin-left: 0px;
		}
	}
`;
