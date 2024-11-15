import { Button } from '@comp-lib';
import styled, { css } from 'styled-components';
import { FlexRow } from '../../../../theme/defaultStyles';

export const Container = styled.div`
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
