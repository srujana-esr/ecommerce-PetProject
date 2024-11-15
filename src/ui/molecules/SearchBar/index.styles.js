import styled from 'styled-components';
import { Input } from '@comp-lib';
import {
	BACKGROUND_COLORS,
	BORDER_COLORS,
	FONT_COLOR,
} from '../../../theme/defaultConstants';
import { FlexColumn, FlexRow } from '../../../theme/defaultStyles';

const SearchContainer = styled.div`
	margin: 10px auto auto auto;
	width: 600px;
	border-radius: 3px;
	border: 1px solid ${BORDER_COLORS.primary};
	background-color: rgba(255, 255, 255, 0.5);
	position: relative;

	${FlexRow}
	align-items: center;

	:has(input:focus) {
		border-color: ${BORDER_COLORS.darkLight};
	}

	.search-results {
		display: block;
		position: absolute;
		border: 1px solid ${BORDER_COLORS.primary};

		width: 584px;
		min-height: 200px;

		top: 45px;
		z-index: 1;
		border-radius: 3px;
		background-color: ${BACKGROUND_COLORS.white};

		${FlexColumn}
		padding: 5px 8px;

		.loader {
			width: calc(100% - 16px);
		}
	}
`;

export default SearchContainer;

export const SearchInput = styled(Input)`
	background-color: transparent;
	height: 30px;
	width: 100%;
	color: #000;
	font-size: 0.875rem;
	letter-spacing: 0.8px;
	margin-left: 0;
	padding: 5px 8px;

	::placeholder {
		color: ${FONT_COLOR.disabled};
	}

	:focus {
		::placeholder {
			color: ${FONT_COLOR.baseLight};
		}
	}
`;
