import styled from "styled-components";
import { BORDER_COLORS, FONT_COLOR } from "../../../theme/defaultConstants";
import { FlexColumn, FlexRow } from "../../../theme/defaultStyles";

export const Container = styled.div`
	padding: 40px 0;
	border-bottom: 3px solid ${BORDER_COLORS.greyBottomBorder};

	:last-of-type {
		border-bottom: none;
	}

	${FlexRow}
	justify-content: flex-start;

`;

export const ProductInfo = styled.div`
	flex: 1 0 40%;
	${FlexColumn}
	padding: 10px 30px;
`;

export const Title = styled.p`
	color: ${FONT_COLOR.primary};
`

export const Price = styled.p`
	margin-top: 10px;
	color: ${FONT_COLOR.secondary};
`

export const Actions = styled.div`
	margin-top: 40px;
	color: ${FONT_COLOR.secondary};
`