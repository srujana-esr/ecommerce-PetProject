import styled, { css } from 'styled-components';
import { BORDER_COLORS } from '../../../theme/defaultConstants';
import { FlexRow } from '../../../theme/defaultStyles';

export const Box = css`
	max-width: 700px;
	margin: 12px 0px;
	padding: 14px 18px;
	border: 1px solid ${BORDER_COLORS.primary};
	border-radius: 8px;

	${FlexRow}
	justify-content: space-between;
`;

export const Summary = styled.div`
	${Box}
`;
