import styled, { css } from 'styled-components';
import { Button } from 'comp-lib';
import { FlexRow } from '../../../theme/defaultStyles';

export const View = styled.div`
	width: calc(100% - 100px);
	overflow: scroll;
	background-color: #f8f8f8;
	border-top: 1px solid #e9e9e9;

	padding: 50px 75px;
`;

export const FormControl = styled.div`
	margin-top: 30px;
	width: 100%;
	min-width: 200px;
	max-width: 500px;

	${FlexRow}
	justify-content: space-between;
	align-items: center;

	label {
		font-size: 0.75rem;
		width: 20%;
		max-width: 100px;
	}

	input {
		width: 75%;
		height: 20px;

		:disabled {
			background-color: #f2f3f7;
		}
	}

	input[type='checkbox'] {
		width: 20px;
		margin-left: 10px;
	}

	p {
		font-size: 0.875rem;
		text-align: left;
		width: 75%;
		/* height: 20px; */
		padding: 5px 8px;
	}
`;

export const ButtonContainer = styled.div`
	${FlexRow}
	justify-content: space-between;

	width: 100%;
	min-width: 200px;
	max-width: 500px;
	margin-top: 50px;

	.sub_button_container {
		position: relative;
	}
`;

const ButtonCSS = css`
	border: 1px solid #000;
	border-radius: 3px;
	font-size: 0.938rem;
	width: 150px;
	height: 40px;
	cursor: pointer;

	:disabled {
		background-color: #e5e5e5;
		border-color: #e5e5e5;
		color: #757575;
		cursor: not-allowed;
	}
`;

export const PrimaryButton = styled(Button)`
	${ButtonCSS}
	background-color: #000;
	color: #fff;
`;

export const SecondaryButton = styled(Button)`
	${ButtonCSS}
	background-color: #fff;
	border-color: #000;
	color: #000;
`;
