import styled from 'styled-components';
import { FONT_COLOR } from '../../../../theme/defaultConstants';
import { FlexRow } from '../../../../theme/defaultStyles';

export const Container = styled.div`
	position: relative;
	border: 2px solid #e8e9e9;
	width: 120px;
	height: 30px;
	border-radius: 8px;
	overflow: hidden;

	${FlexRow}
	justify-content: space-evenly;
	align-items: center;
	padding: 5px;

	p {
		font-size: 1.1rem;
		color: ${FONT_COLOR.primary};
	}

	.loader {
		width: 100%;
		height: 100%;
		z-index: 2;
	}
`;
