import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../../theme/defaultStyles';

export const StyledForm = styled.form`
	${FlexColumn}
	align-items: center;
	width: 500px;
	height: 500px;
	padding: 10px;

	h1 {
		text-align: left;
		width: 350px;
	}

	.formControl {
		${FlexColumn}
		.form_input {
			width: 350px;
			height: 40px;
			margin: 10px 0;
			padding: 0 16px;
			background-color: #fff;
			border: 1px solid #e5e5e5;
			border-radius: 3px;
			box-sizing: border-box;

			color: #8d8d8d;
			font-size: 0.875rem;
			line-height: 17px;
		}
	}

	.form_options {
		cursor: pointer;
		text-align: right;
		margin-bottom: 25px;
	}

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

		button {
			background-color: #000;
			border: 1px solid #000;
			border-radius: 3px;
			color: #fff;
			font-size: 0.938rem;
			width: 350px;
			height: 40px;
			/* margin: 25px 0; */
			padding: 0 16px;
			cursor: pointer;

			:disabled {
				background-color: #e5e5e5;
				border-color: #e5e5e5;
				color: #757575;
				cursor: not-allowed;
			}
		}
	}

	.signup_option {
		width: 350px;
		text-align: right;
		margin-top: 25px;
		line-height: 14px;

		span {
			color: #000;
			margin-left: 5px;
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;
