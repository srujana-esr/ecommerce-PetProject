import styled from 'styled-components';

export const StyledLoadingCard = styled.div`
	flex: 0 0 31%;
	max-width: 500px;
	height: 100%;
	padding-left: 8px;
	padding-right: 8px;
	margin-bottom: 18px;

	.product_img {
		width: 100%;
		min-height: 300px;
	}

	.product_desc {
		padding: 12px 0px 2px;

		.product_desc_info {
			.product_title {
				height: 1rem;
				width: 75%;
			}

			.product_type {
				height: 1rem;
				width: 30%;
			}
		}

		.product_desc_price {
			height: 1rem;
			width: 50%;
		}
	}
`;
