import { Button } from '@comp-lib';
import styled, { css } from 'styled-components';
import { FONT_COLOR, BORDER_COLORS } from '../../../theme/defaultConstants';
import { FlexRow } from '../../../theme/defaultStyles';

export const CheckoutContainer = styled.div`
	flex-grow: 1;
	padding: 0px;

	.header {
		border-bottom: 2px solid ${BORDER_COLORS.greyBottomBorder};
		padding: 15px 0;

		color: ${FONT_COLOR.primary};
		font-size: 1.5rem;
	}

	.delivery-date {
		padding: 30px 0;
		color: #959696;
	}

	.total_amount {
		${FlexRow}
		justify-content: space-between;
		padding: 20px 0;
		font-size: 1rem;
		color: ${FONT_COLOR.primary};
	}

	@media (min-width: 1200px) {
		padding-right: 8px;
		padding-left: 20px;

		p {
			color: ${FONT_COLOR.base};
		}
	}
`;

export const StyledCheckoutAmountInfoContainer = styled.div`
	padding: 20px 0;
	border-top: 2px dashed ${BORDER_COLORS.greyBottomBorder};
	border-bottom: 2px dashed ${BORDER_COLORS.greyBottomBorder};

	.amount_type {
		${FlexRow}
		justify-content: space-between;
		font-size: 0.95rem;
		color: ${FONT_COLOR.secondary};
		margin-top: 15px;

		:first-of-type {
			color: ${FONT_COLOR.primary};
			margin-top: 0px;
		}
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	padding: 20px 0;
	${FlexRow}
	justify-content: space-between;
`;

const commonButtonStyles = css`
	background-color: ${FONT_COLOR.base};
	border: 1px solid ${FONT_COLOR.base};
	border-radius: 3px;
	color: #fff;
	font-size: 0.938rem;
	width: 48%;
	max-width: 200px;
	height: 50px;
	padding: 0 16px;
	cursor: pointer;
	transition: 0.15s linear;

	:disabled {
		background-color: #e5e5e5;
		border-color: #e5e5e5;
		color: #757575;
		cursor: not-allowed;

		:hover {
			box-shadow: none;
		}
	}

	:hover {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
`;

export const CheckoutButtonContainer = styled.div`
	position: relative;
	width: 48%;

	button {
		${commonButtonStyles};
		width: 100%;
	}
`;

export const CancelButton = styled(Button)`
	${commonButtonStyles};

	background-color: #fff;
	color: ${FONT_COLOR.base};
	border: 2px solid #e7e8e8;

	:hover {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
`;
