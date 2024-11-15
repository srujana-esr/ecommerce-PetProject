import styled from 'styled-components';
import { FlexRow } from '../../../../../theme/defaultStyles';

export const Container = styled.div`
	max-width: 300px;
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

	.wishlist-id {
		font-weight: bold;
		padding: 10px 0;
	}
`;

export const Content = styled.div`
	${FlexRow}
	justify-content: space-between;

	padding: 10px 0 15px 0;
	border-bottom: 1px solid #f0f1f2;

	.created-date {
		margin-right: 20px;
	}

	.user-count {
		margin: 0px;
		line-height: 1.3rem;

		ion-icon {
			font-size: 1.1rem !important;
			vertical-align: sub;
		}
	}
`;

export const Footer = styled.div`
	${FlexRow}
	justify-content: space-between;
	padding: 10px 0;
`;