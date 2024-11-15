import styled from 'styled-components';
import { FONT_COLOR } from '../../../theme/defaultConstants';
import { FlexColumn, FlexRow } from '../../../theme/defaultStyles';

export const CartActions = styled.div`
	${FlexColumn}
	justify-content: space-evenly;
	align-items: flex-end;

	.actions {
		${FlexRow}

		.cart-action-delete {
			:hover {
				color: ${FONT_COLOR.base};
				cursor: pointer;
			}
		}

		.cart-action-delete-disabled {
			cursor: not-allowed !important;
			color: ${FONT_COLOR.disabled} !important;
		}
	}
`;
