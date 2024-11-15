import styled from 'styled-components';
import { FlexRow } from '../../../../theme/defaultStyles';

export const Container = styled.div`
	width: 100%;
	min-width: 200px;
	max-width: 500px;

	${FlexRow}
	justify-content: flex-start;

	ion-icon {
		height: 20px;
		width: 20px;
		margin-left: 10px;
		cursor: pointer;
	}
`;
