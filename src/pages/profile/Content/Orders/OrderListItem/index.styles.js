import styled from 'styled-components';
import { FlexRow } from '../../../../../theme/defaultStyles';
import { GET_STATUS_COLOR } from './index.util';

export const Container = styled.div`
	max-width: 500px;
	margin-top: 20px;
	padding: 10px 25px;
	background-color: #fff;
	border: 1px solid #f0f1f2;
	border-radius: 10px;

	font-size: 0.875rem;
	color: #656b77;
	transition: all 0.2s linear;

	:hover {
		cursor: pointer;
		background-color: #f7fbfe;
	}

	.order-id {
		font-weight: bold;
		padding: 10px 0;
	}
`;

export const Content = styled.div`
	${FlexRow}
	justify-content: flex-start;

	padding: 10px 0 15px 0;
	border-bottom: 1px solid #f0f1f2;

	.order-date {
		margin-left: 20px;
	}
`;

export const Footer = styled.div`
	${FlexRow}
	justify-content: flex-start;
	padding: 10px 0;

	.order-price {
		margin: auto;
		margin-left: 20px;
	}

	.order-status {
		border: 1px solid black;
		padding: 5px;
		border-radius: 5px;
	}
`;

export const OrderStatus = styled.p`
	padding: 5px;
	color: #000;
	font-size: 0.75rem;
	border-radius: 5px;
	border: 1px solid
		${(props) => GET_STATUS_COLOR[props.status]?.border || '#F0F1F2'};

	background-color: ${(props) =>
		GET_STATUS_COLOR[props.status]?.background || '#F0F1F2'};
`;
