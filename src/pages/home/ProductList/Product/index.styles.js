import styled from 'styled-components';

export const StyledProductCard = styled.div`
	flex: 0 0 31%;
	max-width: 500px;
	height: 100%;
	margin-right: 20px;

	:nth-of-type(3n) {
		margin-right: 0;
	}
	/* padding-left: 8px; */
	/* padding-right: 8px; */
	margin-bottom: 18px;

	/* :hover {
			box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(70,70,70,0.12);
		} */

	.product_desc {
		padding: 12px 0px 2px;
		font-size: 1rem;

		.product_desc_info {
			line-height: 1.5em;
			.product_title {
				color: rgb(17, 17, 17);
				font-weight: 500;
			}

			.product_type {
				color: rgb(117, 117, 117);
			}
		}

		.product_desc_price {
			padding: 10px 0;
			p {
				color: #111111;
			}
		}
	}
`;
