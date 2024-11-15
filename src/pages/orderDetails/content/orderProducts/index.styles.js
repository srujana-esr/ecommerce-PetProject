import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../../../theme/defaultStyles';
import { Box } from '../index.styles';

export const Container = styled.div`
	${Box}
	${FlexColumn};
`;

export const DeliveryDate = styled.p`
	font-size: 1.125rem;
	line-height: calc(1.125rem * 1.33);
	vertical-align: middle;
	font-weight: bold;
`;

export const ProductList = styled.div`
	${FlexColumn}

	margin-top: 20px;
`;

export const ProductListItem = styled.div`
	${FlexRow}
	justify-content: flex-start;
	margin-top: 10px;

	:first-of-type {
		margin-top: 0px;
	}

	img {
		width: 100px;
		height: auto;
		aspect-ratio: 1/1;
	}

	.product_details {
		margin-left: 20px;

		p {
			margin-top: 2px;
		}

		.product_title {
			font-size: 0.875rem;
			line-height: calc(0.825rem * 1.33);
			font-weight: 500;
		}

		.details {
			font-size: 0.75rem;
			line-height: calc(0.75rem * 1.33);
		}
	}
`;
