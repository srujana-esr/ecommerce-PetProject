import styled from 'styled-components';
import { FONT_COLOR } from '../../../../theme/defaultConstants';

export const Container = styled.div`
	font-size: 0.875rem;
	padding: 8px 0;
	cursor: pointer;

	a {
		color: ${FONT_COLOR.secondary};
	}

	:hover a {
		color: ${FONT_COLOR.primary};
	}
`;
