import styled from 'styled-components';
import { FlexColumn } from '../../../theme/defaultStyles';

export const Container = styled.div`
	${FlexColumn}

	padding: 50px;

	h1 > span {
		font-size: 40px;
		margin-left: 10px;
	}

	p {
		margin-bottom: 20px;
		font-size: 1.5rem;
		font-weight: bold;
		color: #198754;
	}

	button {
		background-color: #000;
		border-radius: 3px;
		color: #fff;
		font-size: 0.938rem;
		width: 200px;
		height: 40px;
		padding: 0 16px;
		cursor: pointer;
	}
`;
