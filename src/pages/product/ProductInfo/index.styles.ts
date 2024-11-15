import styled from 'styled-components';
import { FlexColumn } from '../../../theme/defaultStyles';

export const ProductInfoView = styled.div`
	flex: 0 1 50%;
	padding: 30px;

	${FlexColumn}
	justify-content: flex-start;

	small {
		margin: 3px 0;
		line-height: 1.5;
	}

	.product_desc {
		margin-top: 12px;
	}

	.product_price {
		margin-top: 12px;
		line-height: 1.5;
		font-size: 0.875rem;

		span {
			font-size: 1rem;
			font-weight: bold;
		}
	}
`;
