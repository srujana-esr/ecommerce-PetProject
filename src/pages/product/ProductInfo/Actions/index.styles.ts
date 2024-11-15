import styled, { css } from 'styled-components';
import { FlexRow } from '../../../../theme/defaultStyles';

export const ActionContainer = styled.div`
	margin-top: 12px;

	.button_container {
		position: relative;
		height: 40px;
		width: 350px;

		.icon_container {
			color: #fff;
			position: absolute;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			overflow: hidden;
			background-color: rgba(0, 0, 0, 0.85);
			border-radius: 3px;

			${FlexRow}
			align-items: center;

			ion-icon {
				font-size: 2rem;
			}

			.login_failed {
				color: #ff9494;
			}

			.login_success {
				color: #4bb543;
			}
		}
	}
`;

const ButtonSharedStyles = css`
	background-color: #000;
	border: 1px solid #000;
	border-radius: 3px;
	color: #fff;
	font-size: 0.938rem;
	width: 350px;
	height: 40px;
	padding: 0 16px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;

	&:hover {
		box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
			2px 2px 7px rgba(80, 80, 80, 0.92);
	}

	&:disabled {
		background-color: #e5e5e5;
		border-color: #e5e5e5;
		color: #757575;
		cursor: not-allowed;
	}

`;

export const PrimaryButton = styled.button`
	${ButtonSharedStyles};
`;

export const SecondaryButton = styled.button`
	${ButtonSharedStyles};
	background-color: #fff;
	border: 2px solid #ccc;
	color: #ccc;

	&:hover {
		border-color: #000;
		color: #000;
		box-shadow: none;
	}
`;