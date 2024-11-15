import styled from 'styled-components';
import {
	DefaultIonIconStyle,
	FlexColumn,
	FlexRow,
} from '../../../theme/defaultStyles';
import { customKickAnimation } from '../../../theme/animations';
import {
	ELEMENT_STATE_PROPERTIES,
	FONT_COLOR,
	BORDER_COLORS,
} from '../../../theme/defaultConstants';

export const StyledHeader = styled.div`
	padding: 15px 0;
	border-bottom: 2px solid ${BORDER_COLORS.greyBottomBorder};
	color: ${FONT_COLOR.baseLight};
	font-size: 1.5rem;

	${FlexRow}
	justify-content: space-between;
	align-items: center;

	.icon-container {
		${FlexRow}
		justify-content: space-evenly;
		align-items: center;

		a {
			color: ${FONT_COLOR.secondary};
			height: 1.3rem;
			margin-right: 10px;

			:hover {
				color: ${FONT_COLOR.base};
			}
		}
	}
`;

export const EmptyCartIcon = styled.div`
	transition: 0.2s linear;
	color: ${(props) =>
		props.disabled ? ELEMENT_STATE_PROPERTIES.colors.disabled : 'inherit'};
	width: 50px;
	height: 40px;

	${FlexColumn}

	:hover {
		cursor: ${(props) =>
			props.disabled
				? ELEMENT_STATE_PROPERTIES.cursors.disabled
				: ELEMENT_STATE_PROPERTIES.cursors.clickable};
	}

	ion-icon {
		${DefaultIonIconStyle}
		justify-self: center;
		margin-top: 3px;
	}

	.loader-container {
		position: relative;
		width: 100%;
		height: 100%;
		${FlexRow}
		justify-content: flex-end;

		/* div { width: 35px; } */

		> ::before,
		> ::after {
			animation: ${customKickAnimation} 1s infinite alternate;
		}
	}
`;
