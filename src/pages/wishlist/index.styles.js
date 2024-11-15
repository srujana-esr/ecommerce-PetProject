import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { BORDER_COLORS, FONT_COLOR } from "../../theme/defaultConstants";
import { FlexColumn, FlexRow } from "../../theme/defaultStyles";

export const Container = styled.div`
	padding: 50px;
`;

export const Header = styled.div`
`

export const Content = styled.div`
	margin-top: 20px;
	min-height: 200px;
	${FlexRow}
	gap: 20px;
`;

export const EmptyWishlistMessage = styled.div`
	h3 {
		color: ${FONT_COLOR.secondary};
		font-weight: 500;

		ion-icon {
			margin-left: 10px;
			font-size: 2rem;
			vertical-align: middle;
		}
	}

	.link-text-container {
		width: max-content;
		padding: 2px 0px;
		border-bottom: 1px solid ${BORDER_COLORS.greyBottomBorder};
	}
`;

export const CustomLink = styled(Link)`
	font-size: 0.75rem;
	color: ${FONT_COLOR.baseLight} !important;	
`;

export const commonBoxStyles = css`
	padding: 14px 18px;
	border: 1px solid ${BORDER_COLORS.greyBottomBorder};
	border-radius: 5px;

	width: 48%;
	${FlexColumn}
	justify-content: flex-start;

	.title {
		color: ${FONT_COLOR.disabled};
		font-weight: 500;
		margin-bottom: 15px;
	}
`;

export const ProductSection = styled.div`
	${commonBoxStyles};

	height: max-content;
`;