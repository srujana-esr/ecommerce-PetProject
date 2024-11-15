import styled from 'styled-components';
import { FlexColumn } from '../../theme/defaultStyles';

export const Container = styled.div`
	display: block;
	width: 100%;
	height: auto;
	max-width: 100vw;
	margin: auto;

	.dummy_nav {
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.form_container {
		width: 100%;
		height: calc(100vh - 70px);
		${FlexColumn}
		align-items: center;
	}
`;
