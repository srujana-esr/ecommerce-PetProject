import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../theme/defaultStyles';

export const Container = styled.div`
	display: block;
	min-height: 100%;

	padding: 0 50px;

	${FlexColumn}
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const CartContainer = styled.div`
	padding-top: 40px;
	width: 100%;
	max-width: 1200px;

	${FlexRow}
	align-content: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
	vertical-align: top;

	@media (min-width: 1200px) {
		flex-wrap: nowrap;
	}
`;

export const CartView = styled.div`
	width: 100%;
	max-height: 100%;

	${FlexColumn}
	justify-content: flex-start;
	overflow: scroll;

	@media (min-width: 1200px) {
		max-height: 100%;
		max-width: 65%;
		margin-right: 20px;
	}
`;
